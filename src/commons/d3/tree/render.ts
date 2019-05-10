import * as d3 from "d3";
import HierarchyNodeDatum from "../hierarchy-node-datum";
// import "./tree.css";

// set the dimensions and margins of the diagram
const margin = { top: 40, right: 90, bottom: 50, left: 90 };

const getClientSize = (id: string) => {
    const parent: HTMLElement = (document.getElementById(id) as any);
    const width = parent.clientWidth - margin.left - margin.right;
    const height = parent.clientHeight - margin.top - margin.bottom;
    return [width, height];
}

export default <T>(data: HierarchyNodeDatum<T>, parentId: string) => {

    const parent = document.getElementById(parentId);

    // Constructs a root node from the specified hierarchical data.
    const root: d3.HierarchyNode<HierarchyNodeDatum<T>> = d3.hierarchy(data)

    const [width, height] = getClientSize(parentId);

    // declares a tree layout and assigns the size
    const tree = d3.tree().size([width, height]);

    const nodes = tree(root)

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    // const g = d3.select(`#${parentId}`).append("svg")
    const g = d3.select(parent).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    const link = g.selectAll(".link")
        .data(nodes.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d => {
            if (d.parent) {
                return "M" + d.x + "," + d.y
                    + "C" + d.x + "," + (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
                    + " " + d.parent.x + "," + d.parent.y;
            } else {
                return ""
            }
        });

    // adds each node as a group
    const node = g.selectAll(".node")
        .data(nodes.descendants())
        .enter().append("g")
        .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
        .attr("transform", d => "translate(" + d.x + "," + d.y + ")");

    // adds the circle to the node
    node.append("circle").attr("r", 10);

    // adds the text to the node
    node.append("text")
        .attr("dy", ".35em")
        .attr("y", function (d) { return d.children ? -20 : 20; })
        .style("text-anchor", "middle")
        .text(d => (d.data as any).name)
};
