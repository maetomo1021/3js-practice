// import * as THREE from 'THREE';
window.addEventListener("DOMContentLoaded", function () {

    //シーンが必要
    const scene = new THREE.Scene();
    //カメラも必要
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / this.window.innerHeight, 0.1, 1000);
    // const camera = new THREE.PerspectiveCamera(fov,aspect,near?,1000);

    //レンダラーも必要
    //カメラで移したやつをこっちの画面で移すのに必要
    const renderer = new THREE.WebGLRenderer();
    //WebGLに３Dオブジェクトを表示する要素

    //アスペクト比の計算↓
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    /* ボックスのサイズ決定、メッシュ、追加 */
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x0FFFFF })
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    /* アニメーション制御 */
    //コールバック処理
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.005;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / window.innerHeight)
    }

    //ウィンドウの大きさを変更した時のサイズ変更を自動で行う
    this.window.addEventListener("resize", onWindowResize)
    animate();
})        