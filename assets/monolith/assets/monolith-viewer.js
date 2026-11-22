// Minimal standalone publication viewer; no Fragment editor or monitor layout.
// The physics and camera controls come directly from the compiled Monolith sketch.
import {
  onMountPreview, onResizePreview, onDestroyPreview
} from './THREERenderer-standalone.js';
import {init,update,resize,dispose} from './sketch-D3KfETkW.js';

const id = 'monolith';
const {renderer, scene, canvas} = onMountPreview({id});
document.body.appendChild(canvas);
let frame = 0;
let previous = 0;
let width = 0;
let height = 0;
let disposed = false;

function measure() {
  const newWidth = Math.max(1, Math.round(document.documentElement.clientWidth));
  const newHeight = Math.max(1, Math.round(document.documentElement.clientHeight));
  if (newWidth === width && newHeight === height) return;
  width = newWidth;
  height = newHeight;
  onResizePreview({
    id, width, height,
    pixelRatio: Math.min(window.devicePixelRatio || 1, 2)
  });
  resize({width, height});
}
width = Math.max(1, Math.round(document.documentElement.clientWidth));
height = Math.max(1, Math.round(document.documentElement.clientHeight));
init({scene, width, height});
onResizePreview({
  id, width, height,
  pixelRatio: Math.min(window.devicePixelRatio || 1, 2)
});
function tick(now) {
  if (disposed) return;
  measure();
  const deltaTime = previous ? Math.min(now - previous, 250) : 0;
  previous = now;
  update({renderer, scene, deltaTime});
  frame = requestAnimationFrame(tick);
}
frame = requestAnimationFrame(tick);
window.addEventListener('resize', measure);
window.addEventListener('pagehide', () => {
  disposed = true;
  cancelAnimationFrame(frame);
  window.removeEventListener('resize', measure);
  dispose();
  onDestroyPreview({id});
}, {once: true});
