import { hierarchy, HierarchyNode } from "d3";
import HierarchyNodeDatum from "./hierarchy-node-datum";

export const render = <T>(data: HierarchyNodeDatum<T>) => {
    const hierarychyNode: HierarchyNode<HierarchyNodeDatum<T>> = hierarchy(data)
};
