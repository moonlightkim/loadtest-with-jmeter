/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 95.45454545454545, "KoPercent": 4.545454545454546};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9181818181818182, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "wikipedia/w/index.php-41"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/336px-F-16_June_2008.jpg-33"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/v1/tiles-43"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-40"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/wikipedia/commons/thumb/9/93/Phil_Lord_%26_Christopher_Miller_by_Gage_Skidmore.jpg/280px-Phil_Lord_%26_Christopher_Miller_by_Gage_Skidmore.jpg-36"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/-26-1"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-31"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-42"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/-26-0"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-30"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/wikipedia/commons/thumb/0/0a/Snowy_Plover_Morro_Strand.jpg/324px-Snowy_Plover_Morro_Strand.jpg-35"], "isController": false}, {"data": [0.9, 500, 1500, "wikipedia/-26"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-39"], "isController": false}, {"data": [0.9, 500, 1500, "wikipedia/-25"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/load.php-29"], "isController": false}, {"data": [0.8, 500, 1500, "wikipedia/spocs-44"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/wikipedia/commons/thumb/f/f5/W.T._Pike_Contemporary_Biographies_West_Riding_of_Yorkshire_1902%2C_book_cover_%284%29.JPG/258px-W.T._Pike_Contemporary_Biographies_West_Riding_of_Yorkshire_1902%2C_book_cover_%284%29.JPG-37"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/wiki/Talk:Main_Page-38"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/v4/fullHashes:find-28"], "isController": false}, {"data": [0.6, 500, 1500, "wikipedia/wikipedia/commons/thumb/1/1c/Edmonia_Lewis_by_Henry_Rocher.jpg/600px-Edmonia_Lewis_by_Henry_Rocher.jpg-32"], "isController": false}, {"data": [1.0, 500, 1500, "wikipedia/w/index.php-34"], "isController": false}, {"data": [0.0, 500, 1500, "wikipedia/-45"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 110, 5, 4.545454545454546, 232.6727272727273, 46, 1432, 153.5, 468.5000000000001, 586.6999999999999, 1402.5200000000002, 12.919896640826872, 428.05198147903457, 6.783978043516561], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["wikipedia/w/index.php-41", 5, 0, 0.0, 67.0, 46, 81, 75.0, 81.0, 81.0, 81.0, 1.2916559028674761, 3.162538749677086, 0.6407824205631619], "isController": false}, {"data": ["wikipedia/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/336px-F-16_June_2008.jpg-33", 5, 0, 0.0, 83.0, 68, 127, 72.0, 127.0, 127.0, 127.0, 1.287664177182591, 17.34322688642802, 0.5734129539016225], "isController": false}, {"data": ["wikipedia/v1/tiles-43", 5, 0, 0.0, 391.6, 336, 470, 380.0, 470.0, 470.0, 470.0, 1.2294074256208507, 0.3289625338087042, 0.3193577882960413], "isController": false}, {"data": ["wikipedia/w/load.php-40", 5, 0, 0.0, 215.0, 151, 308, 205.0, 308.0, 308.0, 308.0, 1.2456402590931739, 155.37683537306924, 0.5899760992775286], "isController": false}, {"data": ["wikipedia/wikipedia/commons/thumb/9/93/Phil_Lord_%26_Christopher_Miller_by_Gage_Skidmore.jpg/280px-Phil_Lord_%26_Christopher_Miller_by_Gage_Skidmore.jpg-36", 5, 0, 0.0, 84.2, 52, 112, 83.0, 112.0, 112.0, 112.0, 1.3058239749281797, 27.752585123400365, 0.670765049621311], "isController": false}, {"data": ["wikipedia/-26-1", 5, 0, 0.0, 156.8, 137, 208, 145.0, 208.0, 208.0, 208.0, 1.358326541700625, 33.143963511953274, 0.6738573077967943], "isController": false}, {"data": ["wikipedia/w/load.php-31", 5, 0, 0.0, 73.8, 59, 92, 76.0, 92.0, 92.0, 92.0, 1.458151064450277, 5.572301509186352, 0.6479089202391368], "isController": false}, {"data": ["wikipedia/w/load.php-42", 5, 0, 0.0, 201.2, 128, 300, 191.0, 300.0, 300.0, 300.0, 1.2453300124533002, 258.12772415940225, 0.5776677303860523], "isController": false}, {"data": ["wikipedia/-26-0", 5, 0, 0.0, 277.4, 217, 369, 260.0, 369.0, 369.0, 369.0, 1.3085579691180318, 1.7238717776760009, 0.631276989008113], "isController": false}, {"data": ["wikipedia/w/load.php-30", 5, 0, 0.0, 92.6, 78, 104, 94.0, 104.0, 104.0, 104.0, 1.4459224985540775, 29.95798917365529, 0.626942958357432], "isController": false}, {"data": ["wikipedia/wikipedia/commons/thumb/0/0a/Snowy_Plover_Morro_Strand.jpg/324px-Snowy_Plover_Morro_Strand.jpg-35", 5, 0, 0.0, 88.2, 59, 124, 98.0, 124.0, 124.0, 124.0, 1.2709710218607015, 18.986370821682765, 0.5932853012201321], "isController": false}, {"data": ["wikipedia/-26", 5, 0, 0.0, 434.8, 373, 515, 434.0, 515.0, 515.0, 515.0, 1.257229067136032, 32.33337786019613, 1.2302182863967814], "isController": false}, {"data": ["wikipedia/w/load.php-39", 5, 0, 0.0, 93.6, 71, 112, 93.0, 112.0, 112.0, 112.0, 1.3196093956188968, 40.1014346628398, 1.0399656076801267], "isController": false}, {"data": ["wikipedia/-25", 5, 0, 0.0, 371.0, 250, 590, 299.0, 590.0, 590.0, 590.0, 1.1913271384322135, 23.290910918513223, 0.5270226501072194], "isController": false}, {"data": ["wikipedia/w/load.php-29", 5, 0, 0.0, 93.0, 61, 136, 78.0, 136.0, 136.0, 136.0, 1.4269406392694064, 22.26138876997717, 0.8193760702054794], "isController": false}, {"data": ["wikipedia/spocs-44", 5, 0, 0.0, 479.2, 406, 670, 409.0, 670.0, 670.0, 670.0, 1.2487512487512487, 1.6682536213786217, 0.6134002716033967], "isController": false}, {"data": ["wikipedia/wikipedia/commons/thumb/f/f5/W.T._Pike_Contemporary_Biographies_West_Riding_of_Yorkshire_1902%2C_book_cover_%284%29.JPG/258px-W.T._Pike_Contemporary_Biographies_West_Riding_of_Yorkshire_1902%2C_book_cover_%284%29.JPG-37", 5, 0, 0.0, 100.8, 63, 148, 93.0, 148.0, 148.0, 148.0, 1.2509382036527394, 52.28286449211909, 0.7329716037027771], "isController": false}, {"data": ["wikipedia/wiki/Talk:Main_Page-38", 5, 0, 0.0, 105.6, 78, 134, 99.0, 134.0, 134.0, 134.0, 1.3248542660307365, 39.56268423754637, 0.6831279809220986], "isController": false}, {"data": ["wikipedia/v4/fullHashes:find-28", 5, 0, 0.0, 288.4, 216, 390, 247.0, 390.0, 390.0, 390.0, 1.3308490817141336, 0.7589998669150918, 0.8577738221985627], "isController": false}, {"data": ["wikipedia/wikipedia/commons/thumb/1/1c/Edmonia_Lewis_by_Henry_Rocher.jpg/600px-Edmonia_Lewis_by_Henry_Rocher.jpg-32", 5, 0, 0.0, 685.8, 431, 1164, 584.0, 1164.0, 1164.0, 1164.0, 1.1106175033318524, 140.5104675699689, 0.527109479120391], "isController": false}, {"data": ["wikipedia/w/index.php-34", 5, 0, 0.0, 210.2, 165, 272, 209.0, 272.0, 272.0, 272.0, 1.273560876209883, 3.1145030724656135, 0.6318055909322465], "isController": false}, {"data": ["wikipedia/-45", 5, 5, 100.0, 525.6, 213, 1432, 286.0, 1432.0, 1432.0, 1432.0, 1.405283867341203, 0.6422586424957841, 0.8220361684935358], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["400/Bad Request", 5, 100.0, 4.545454545454546], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 110, 5, "400/Bad Request", 5, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["wikipedia/-45", 5, 5, "400/Bad Request", 5, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
