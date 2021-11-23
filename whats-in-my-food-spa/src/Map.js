import React,{useRef,useEffect} from 'react'
import { select,geoPath,geoMercator } from 'd3'
import useResizeObserver from './useResizeObserver'
const Map = ({data,year}) => {
    const svgRef=useRef();
    const wrapperRef=useRef();
    const dimensions=useResizeObserver(wrapperRef);
    useEffect(()=>{
        console.log(data.features)
        const svg=select(svgRef.current);

        const {width,height}=dimensions||wrapperRef.current.getBoundingClientRect();
        const projection=geoMercator();
        const pathGenerator=geoPath().projection(projection)

        svg
            .selectAll(".country")
            .data(data.features)
            .join("path")
            .attr("class","country")
            .attr("d",feature=>pathGenerator(feature))

    },[data,year,dimensions])
    return (
        <div ref={wrapperRef} style={{marginBottom:"2rem"}}>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default Map

