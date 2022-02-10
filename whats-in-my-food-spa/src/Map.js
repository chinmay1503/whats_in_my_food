import React,{useRef,useEffect,useState} from 'react'
import { select,geoPath,geoMercator ,min,max,scaleLinear} from 'd3'
import './css/map.css'
const Map = ({data}) => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const [country,setCountry]=useState(null);
    useEffect(() => {
      const svg = select(svgRef.current);
      const tooltip=select("body")
                    .append("div")
                    .classed("tooltip",true)
  
      // projects geo-coordinates on a 2D plane
      const projection = geoMercator().fitSize([800,400],country||data)
      const minCalorie=min(data.features,feature=>feature.properties.calorie);
      const maxCalorie=max(data.features,feature=>feature.properties.calorie);
      const pathGenerator = geoPath().projection(projection);
      const colorScale=scaleLinear().domain([minCalorie,maxCalorie]).range(["green","red"]);
  
      // render each country
      svg
        .selectAll(".country")
        .data(data.features)
        .enter().append('path')
        .on("click",feature=>{
            setCountry(country===feature?null:feature);
        })
        .attr("class","country")
        .attr("fill",feature=>colorScale(feature.properties.calorie))
        .attr("d", feature => pathGenerator(feature))
        .on("mousemove touchmove",(d)=>{
          tooltip
            .style("opacity",1)
            .style("right","400px")
            .style("top","400px")
            .style("width","200px")
            .html(`
            
            <p style="text-align:center;font-size:2rem;">Country: ${d.properties.sovereignt}</p>
            <br>
            <p style="text-align:center;font-size:2rem;">Avg Calorie Consumed/day (Kcal):${d.properties.calorie}</p>
            
         `)
        })
        .on('mouseout',(d)=>{
          tooltip
            .style('opacity',0)
        })
        
      
        
  
    },[data,country])
  
    return (
      <div className="mapDiv" ref={wrapperRef}>
        <svg className = "svgClass" ref={svgRef}></svg>
      </div>
    );
  }


export default Map

