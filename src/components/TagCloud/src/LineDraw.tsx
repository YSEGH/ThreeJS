import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class LineDraw {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private lines: THREE.Line[];
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  constructor() {
    this.lines = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Initialize scene, camera, and renderer
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Contrôles
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.update();
  }

  init(containerId: string) {
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(this.renderer.domElement);
    }
    // Handle mouse move to update mouse position
    document.addEventListener("mousemove", this.onMouseMove.bind(this));

    // Handle mouse click
    document.addEventListener("mouseup", this.onMouseClick.bind(this));
    this.animate();
  }

  private onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onMouseClick() {
    // Update the raycaster with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Calculate the intersection point with a plane at z=0 (parallel to the camera's near plane)
    const intersection = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(
      new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
      intersection
    );

    // Draw a line from camera position to the intersection point
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      this.camera.position.clone(),
      intersection,
    ]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    this.lines.push(line);
    this.scene.add(line);
  }

  private animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Update the camera and renderer
    this.renderer.render(this.scene, this.camera);
  }
}
