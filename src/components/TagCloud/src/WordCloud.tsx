import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const SPHERE_RADIUS = 50;
const NUM_POINTS = 14;
const CAMERA_DISTANCE = 200;

export default class WordCloud {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private words: string[];
  private meshes: THREE.Mesh[];

  constructor(words: string[]) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, CAMERA_DISTANCE);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxPolarAngle = 2.75;
    this.controls.minPolarAngle = 0.35;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);

    this.words = words;
    this.meshes = [];
    this.createMeshes();
  }

  init(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(this.renderer.domElement);
    }
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
    this.animate();
  }

  private randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createMeshes() {
    const sphereGeometry = new THREE.SphereGeometry(SPHERE_RADIUS, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphereMesh);

    const points = this.calculateSphericalPoints(SPHERE_RADIUS, NUM_POINTS);

    const usedPoints: THREE.Vector3[] = [];

    for (let i = 0; i < NUM_POINTS; i++) {
      let point: THREE.Vector3 | undefined;

      // Chercher un point non utilisé
      for (let j = 0; j < points.length; j++) {
        if (!usedPoints.includes(points[j])) {
          point = points[j];
          usedPoints.push(point);
          break;
        }
      }

      if (!point) {
        console.error("Pas assez de points disponibles.");
        break;
      }

      const loader = new FontLoader();

      loader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
        const geometry = new TextGeometry(this.words[i], {
          font: font,
          size: 5,
          height: 1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        const material = [
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }),
        ];

        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.copy(point!);
        mesh.geometry.computeBoundingBox();
        mesh.geometry.translate(-mesh.geometry.boundingBox!.max.x / 2.5, 0, 0);
        this.meshes.push(mesh);
        this.scene.add(mesh);
      });
    }
  }

  private calculateSphericalPoints(
    radius: number,
    numPoints: number,
    minDistance: number = 30
  ): THREE.Vector3[] {
    const points: THREE.Vector3[] = [];

    const isTooClose = (
      point: THREE.Vector3,
      existingPoints: THREE.Vector3[]
    ) => {
      for (const existingPoint of existingPoints) {
        if (point.distanceTo(existingPoint) < minDistance) {
          return true;
        }
      }
      return false;
    };

    let i = 0;
    while (i < numPoints) {
      const u = Math.random();
      const v = Math.random();

      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const point = new THREE.Vector3(x, y, z);

      if (!isTooClose(point, points)) {
        points.push(point);
        i++;
      }
    }

    return points;
  }

  private animate() {
    this.meshes.forEach((mesh) => {
      mesh.lookAt(this.camera.position);
    });

    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
