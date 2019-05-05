const svgNamespaceURI = "http://www.w3.org/2000/svg";
const svg: SVGSVGElement = document.createElementNS(svgNamespaceURI, "svg");
svg.setAttribute('style', 'border: 1px solid black');
svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
document.body.appendChild(svg);

const resize = () => {
    svg.setAttribute("width", window.innerWidth.toString());
    svg.setAttribute("height", window.innerHeight.toString());
};

resize();

window.addEventListener("resize", () => resize());

const path: SVGPathElement = document.createElementNS(svgNamespaceURI, "path");
path.setAttribute("d", "M2,2 L10,6 L2,10 L6,6 L2,2");
path.setAttribute("fill", "green");

const marker: SVGMarkerElement = document.createElementNS(svgNamespaceURI, "marker");
marker.setAttribute("id", "arrow");
marker.setAttribute("markerUnits", "strokeWidth")
marker.setAttribute("markerWidth", "12")
marker.setAttribute("markerHeight", "12")
marker.setAttribute("viewBox", "0 0 12 12")
marker.setAttribute("refX", "6")
marker.setAttribute("refY", "6")
marker.setAttribute("orient", "auto")
marker.appendChild(path);

const defs: SVGDefsElement = document.createElementNS(svgNamespaceURI, "defs");
defs.appendChild(marker);

svg.appendChild(defs);

export default svg;
