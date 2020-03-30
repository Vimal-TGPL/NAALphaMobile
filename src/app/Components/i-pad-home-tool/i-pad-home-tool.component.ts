import { Component, OnInit, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import * as d3 from 'd3';
import { environment } from '../../../environments/environment'
import { from } from 'rxjs';

@Component({
  selector: 'app-ipadhometool',
  templateUrl: './i-pad-home-tool.component.html',
  styleUrls: ['./i-pad-home-tool.component.scss'],
})
export class IPadHomeToolComponent implements OnInit, AfterContentInit {

  gchart: any;
  gC360: any; 
  gC100: any;
  radius = 170;
  chartMain: any = [];
  private api_url = environment.api_url;

  constructor(private changedet: ChangeDetectorRef) { }
  ngAfterContentInit(): void {
    this.loadData();
  }

  ngOnInit() {}

  loadData(){
    this.gC360 = d3.scaleLinear()
      .domain([0, 90, 180, 270, 360])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    this.gC100 = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"])

    var ContainerDiv = document.getElementById("svgHContainer");

    this.gchart = d3.select("#gchart")

    let that = this;
    this.chartMain = this.createMainChart(this.gchart);
  }

  createMainChart(obj){
    let that = this;

    // Main Circle group Start

    let sradius = 100;
    var grp1 = obj.append("g").attr("id", "crlChart");

    grp1.append("circle")
    .attr("id", "maincircle")
    .attr("class", "start-ring")
    .attr("fill", "#fff")
    .attr("r", 0)
    .transition()
    .delay(300)
    .duration(1000)
    .on("end", function () {
      repeat(); repeat1();
      that.CreateData("");
    });

    function repeat() {
      d3.select(".ringAnim")
        .attr('r', (+sradius))
        .style('opacity', 1)
        .style('stroke-width', '5px')
        .transition()
        .delay(600)
        .duration(2000)
        .attr('r', sradius * 1.3)
        .style('stroke-width', '1px')
        .style('opacity', 0)
        .on("end", repeat);
    }
    function repeat1() {
      d3.select(".preloding")
        .style('opacity', .5)
        .transition()
        .duration(1000)
        .style('opacity', 1)
        .transition()
        .duration(1000)
        .style('opacity', .5)
        .on("end", repeat1);
    }

    return grp1;
  }

  CreateData(d){
    this.changedet.detectChanges();
    var APIURL = this.api_url + "/Scores/GetNAAIndexScoresCurrent/GLOBAL";
    var fInd;
    var fURL = "../assets/data/";
    let that = this;
    d3.select("#maincircle")
        .transition()
        .delay(300)
        .duration(1000)
        .attr('r', that.radius + 2)
        .style('stroke-width', '1px')

        .on("end", function () {
          d3.select("#maincircle")
            .transition()
            .duration(1000)
            .style('stroke-width', '0px');

            that.creatGradienArc(); 
          
            d3.select(".Homecenter")
            .transition()
            .duration(1000)
            .style('opacity', '1');
        });
  }

  creatGradienArc(){
    var gArc = d3.select("#crlChart").append("g");
    var arc = d3.arc()
      .innerRadius(this.radius - 18)
      .outerRadius(this.radius - 2);

    // create our gradient
    var colors = [];
    var color1 = d3.scaleLinear()
      .domain([0, 1, 2, 3, 4])
      .range(["#40b55c", "#75c254", "#f5ea23", "#f37130", "#ef462f"]);

    var linearGradient = gArc.append("defs");

    var linearG1 = linearGradient.append("linearGradient");

    linearG1.attr("id", "linearColors0")
      .attr("x1", "0").attr("y1", "0").attr("x2", ".5").attr("y2", "1");
    linearG1.append("stop").attr("offset", "0%").attr("stop-color", color1(0));
    linearG1.append("stop").attr("offset", "100%").attr("stop-color", color1(1));

    var linearG2 = linearGradient.append("linearGradient");
    linearG2.attr("id", "linearColors1")
      .attr("x1", "0.8").attr("y1", "0").attr("x2", "0.5").attr("y2", "0.8");
    linearG2.append("stop").attr("offset", "0%").attr("stop-color", color1(1));
    linearG2.append("stop").attr("offset", "100%").attr("stop-color", color1(2));

    var linearG3 = linearGradient.append("linearGradient");
    linearG3.attr("id", "linearColors2")
      .attr("x1", "0.8").attr("y1", "0.8").attr("x2", "0").attr("y2", "0.3");

    linearG3.append("stop").attr("offset", "0%").attr("stop-color", color1(2));
    linearG3.append("stop").attr("offset", "100%").attr("stop-color", color1(3));

    var linearG4 = linearGradient.append("linearGradient");
    linearG4.attr("id", "linearColors3")
      .attr("x1", "0").attr("y1", "0.9").attr("x2", "0").attr("y2", "0.1");

    linearG4.append("stop").attr("offset", "0%").attr("stop-color", color1(3));
    linearG4.append("stop").attr("offset", "100%").attr("stop-color", color1(4));

    // 360 degrees
    d3.range(4).forEach(function (d, i) {
      // convert to radians
      var start = (i * 89) * (Math.PI / 180),
        end = ((i * 89.9) + 90) * (Math.PI / 180);
      colors.push({
        startAngle: start,
        endAngle: end
      });
    });

    // add arcs
    gArc.selectAll('.arc')
      .data(colors)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('stroke', 'none')
      .attr('fill', function (d, i) { return 'url(#linearColors' + i + ')'; });
    
      var tau = 2 * Math.PI;
      var gArc1 = d3.select("#crlChart").append("g").attr("class", "scorerange");
      var arc1 = d3.arc()
        .innerRadius(this.radius - 22)
        .outerRadius(this.radius - 23)
        .startAngle(.01);
  
      gArc1.append("path")
        .datum({ endAngle: tau })
        .style("fill", "#ccc")
        .attr("d", arc1);
  
  
      gArc1.append("rect")
        .attr("x", this.radius - 25)
        .attr("y", 0)
        .attr("height", 1.5)
        .attr("width", 4)
        .attr("fill", "#fff")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90.5)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 6)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-89.9)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-45)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", -1)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(0)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(45)")
  
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(90)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(135)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(180)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0)
        .attr("height", .7)
        .attr("width", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(225)")
      gArc1.append("rect")
        .attr("x", this.radius - 28)
        .attr("y", 0.2)
        .attr("height", .7)
        .attr("width", 6)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(269.4)")
        gArc1.append("text")
        .attr("x", this.radius - 30)
        .attr("y", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .text("25%")
  
      gArc1.append("text")
        .attr("x", -(this.radius - 29))
        .attr("y", 5)
        .attr("fill", "#ccc")
        .attr("text-anchor", "start")
        .text("75%")
  
      gArc1.append("text")
        .attr("x", 0)
        .attr("y", this.radius - 34)
        .attr("fill", "#ccc")
        .attr("text-anchor", "middle")
        .text("50%")
  
      gArc1.append("text")
        .attr("x", -3)
        .attr("y", -(this.radius - 45))
        .attr("fill", "#ccc")
        .attr("text-anchor", "end")
        .text("100%")
  
      gArc1.append("text")
        .attr("x", 3)
        .attr("y", -(this.radius - 45))
        .attr("fill", "#ccc")
        .attr("text-anchor", "start")
        .text("0%")
  }
}
