import React, { useEffect } from "react";
import * as THREE from "three";
import "./style/index.css";
type Props = {
  widthSet: number;
};

const Sphere: React.FC<Props> = ({ widthSet }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      widthSet / widthSet,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Mettez à jour la taille du rendu lors du redimensionnement de la fenêtre
    const handleResize = () => {
      const width = widthSet;
      const height = widthSet;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    let geometry: THREE.SphereGeometry;
    let material: THREE.MeshBasicMaterial;
    let sphere: THREE.Mesh;
    // Initialisation de la scène, de la caméra et du rendu
    const init = () => {
      renderer.setSize(widthSet, widthSet);
      document
        .getElementById("sphere-container")
        .appendChild(renderer.domElement);
      camera.position.z = 5;
      camera.position.set(0, 0, 5);

      geometry = new THREE.SphereGeometry(1, 16, 16);
      material = new THREE.MeshBasicMaterial({ color: "transparent" });
      sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(0, 0, 0);

      scene.add(sphere);

      const radiusLines = new THREE.LineSegments(
        new THREE.WireframeGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0xaaaaaa })
      );
      sphere.add(radiusLines);

      const animate = () => {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    // Nettoyer la scène et le rendu lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
      scene.remove(sphere);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div id="sphere-container" />;
};

export default Sphere;
