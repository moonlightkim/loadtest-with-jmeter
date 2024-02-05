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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 156.0, "minX": 0.0, "maxY": 1117.0, "series": [{"data": [[0.0, 156.0], [0.1, 156.0], [0.2, 156.0], [0.3, 156.0], [0.4, 163.0], [0.5, 163.0], [0.6, 163.0], [0.7, 195.0], [0.8, 195.0], [0.9, 195.0], [1.0, 208.0], [1.1, 208.0], [1.2, 208.0], [1.3, 208.0], [1.4, 237.0], [1.5, 237.0], [1.6, 237.0], [1.7, 240.0], [1.8, 240.0], [1.9, 240.0], [2.0, 246.0], [2.1, 246.0], [2.2, 246.0], [2.3, 246.0], [2.4, 247.0], [2.5, 247.0], [2.6, 247.0], [2.7, 249.0], [2.8, 249.0], [2.9, 249.0], [3.0, 253.0], [3.1, 253.0], [3.2, 253.0], [3.3, 253.0], [3.4, 263.0], [3.5, 263.0], [3.6, 263.0], [3.7, 267.0], [3.8, 267.0], [3.9, 267.0], [4.0, 268.0], [4.1, 268.0], [4.2, 268.0], [4.3, 268.0], [4.4, 273.0], [4.5, 273.0], [4.6, 273.0], [4.7, 278.0], [4.8, 278.0], [4.9, 278.0], [5.0, 304.0], [5.1, 304.0], [5.2, 304.0], [5.3, 304.0], [5.4, 309.0], [5.5, 309.0], [5.6, 309.0], [5.7, 320.0], [5.8, 320.0], [5.9, 320.0], [6.0, 326.0], [6.1, 326.0], [6.2, 326.0], [6.3, 326.0], [6.4, 330.0], [6.5, 330.0], [6.6, 330.0], [6.7, 331.0], [6.8, 331.0], [6.9, 331.0], [7.0, 338.0], [7.1, 338.0], [7.2, 338.0], [7.3, 338.0], [7.4, 347.0], [7.5, 347.0], [7.6, 347.0], [7.7, 349.0], [7.8, 349.0], [7.9, 349.0], [8.0, 350.0], [8.1, 350.0], [8.2, 350.0], [8.3, 350.0], [8.4, 361.0], [8.5, 361.0], [8.6, 361.0], [8.7, 379.0], [8.8, 379.0], [8.9, 379.0], [9.0, 391.0], [9.1, 391.0], [9.2, 391.0], [9.3, 391.0], [9.4, 393.0], [9.5, 393.0], [9.6, 393.0], [9.7, 403.0], [9.8, 403.0], [9.9, 403.0], [10.0, 406.0], [10.1, 406.0], [10.2, 406.0], [10.3, 406.0], [10.4, 406.0], [10.5, 406.0], [10.6, 406.0], [10.7, 409.0], [10.8, 409.0], [10.9, 409.0], [11.0, 411.0], [11.1, 411.0], [11.2, 411.0], [11.3, 411.0], [11.4, 417.0], [11.5, 417.0], [11.6, 417.0], [11.7, 421.0], [11.8, 421.0], [11.9, 421.0], [12.0, 421.0], [12.1, 423.0], [12.2, 423.0], [12.3, 423.0], [12.4, 445.0], [12.5, 445.0], [12.6, 445.0], [12.7, 446.0], [12.8, 446.0], [12.9, 446.0], [13.0, 446.0], [13.1, 447.0], [13.2, 447.0], [13.3, 447.0], [13.4, 450.0], [13.5, 450.0], [13.6, 450.0], [13.7, 462.0], [13.8, 462.0], [13.9, 462.0], [14.0, 462.0], [14.1, 464.0], [14.2, 464.0], [14.3, 464.0], [14.4, 470.0], [14.5, 470.0], [14.6, 470.0], [14.7, 477.0], [14.8, 477.0], [14.9, 477.0], [15.0, 477.0], [15.1, 487.0], [15.2, 487.0], [15.3, 487.0], [15.4, 490.0], [15.5, 490.0], [15.6, 490.0], [15.7, 490.0], [15.8, 490.0], [15.9, 490.0], [16.0, 490.0], [16.1, 500.0], [16.2, 500.0], [16.3, 500.0], [16.4, 508.0], [16.5, 508.0], [16.6, 508.0], [16.7, 514.0], [16.8, 514.0], [16.9, 514.0], [17.0, 514.0], [17.1, 515.0], [17.2, 515.0], [17.3, 515.0], [17.4, 520.0], [17.5, 520.0], [17.6, 520.0], [17.7, 530.0], [17.8, 530.0], [17.9, 530.0], [18.0, 539.0], [18.1, 539.0], [18.2, 539.0], [18.3, 539.0], [18.4, 540.0], [18.5, 540.0], [18.6, 540.0], [18.7, 543.0], [18.8, 543.0], [18.9, 543.0], [19.0, 546.0], [19.1, 546.0], [19.2, 546.0], [19.3, 546.0], [19.4, 550.0], [19.5, 550.0], [19.6, 550.0], [19.7, 562.0], [19.8, 562.0], [19.9, 562.0], [20.0, 564.0], [20.1, 564.0], [20.2, 564.0], [20.3, 564.0], [20.4, 571.0], [20.5, 571.0], [20.6, 571.0], [20.7, 580.0], [20.8, 580.0], [20.9, 580.0], [21.0, 584.0], [21.1, 584.0], [21.2, 584.0], [21.3, 584.0], [21.4, 588.0], [21.5, 588.0], [21.6, 588.0], [21.7, 590.0], [21.8, 590.0], [21.9, 590.0], [22.0, 597.0], [22.1, 597.0], [22.2, 597.0], [22.3, 597.0], [22.4, 614.0], [22.5, 614.0], [22.6, 614.0], [22.7, 614.0], [22.8, 614.0], [22.9, 614.0], [23.0, 614.0], [23.1, 614.0], [23.2, 614.0], [23.3, 614.0], [23.4, 623.0], [23.5, 623.0], [23.6, 623.0], [23.7, 623.0], [23.8, 623.0], [23.9, 623.0], [24.0, 630.0], [24.1, 630.0], [24.2, 630.0], [24.3, 630.0], [24.4, 635.0], [24.5, 635.0], [24.6, 635.0], [24.7, 635.0], [24.8, 635.0], [24.9, 635.0], [25.0, 635.0], [25.1, 635.0], [25.2, 635.0], [25.3, 635.0], [25.4, 640.0], [25.5, 640.0], [25.6, 640.0], [25.7, 650.0], [25.8, 650.0], [25.9, 650.0], [26.0, 652.0], [26.1, 652.0], [26.2, 652.0], [26.3, 652.0], [26.4, 657.0], [26.5, 657.0], [26.6, 657.0], [26.7, 658.0], [26.8, 658.0], [26.9, 658.0], [27.0, 660.0], [27.1, 660.0], [27.2, 660.0], [27.3, 660.0], [27.4, 660.0], [27.5, 660.0], [27.6, 660.0], [27.7, 660.0], [27.8, 660.0], [27.9, 660.0], [28.0, 663.0], [28.1, 663.0], [28.2, 663.0], [28.3, 663.0], [28.4, 663.0], [28.5, 663.0], [28.6, 663.0], [28.7, 663.0], [28.8, 663.0], [28.9, 663.0], [29.0, 663.0], [29.1, 663.0], [29.2, 663.0], [29.3, 663.0], [29.4, 665.0], [29.5, 665.0], [29.6, 665.0], [29.7, 665.0], [29.8, 665.0], [29.9, 665.0], [30.0, 670.0], [30.1, 670.0], [30.2, 670.0], [30.3, 670.0], [30.4, 671.0], [30.5, 671.0], [30.6, 671.0], [30.7, 672.0], [30.8, 672.0], [30.9, 672.0], [31.0, 673.0], [31.1, 673.0], [31.2, 673.0], [31.3, 673.0], [31.4, 674.0], [31.5, 674.0], [31.6, 674.0], [31.7, 675.0], [31.8, 675.0], [31.9, 675.0], [32.0, 677.0], [32.1, 677.0], [32.2, 677.0], [32.3, 677.0], [32.4, 677.0], [32.5, 677.0], [32.6, 677.0], [32.7, 678.0], [32.8, 678.0], [32.9, 678.0], [33.0, 680.0], [33.1, 680.0], [33.2, 680.0], [33.3, 680.0], [33.4, 681.0], [33.5, 681.0], [33.6, 681.0], [33.7, 686.0], [33.8, 686.0], [33.9, 686.0], [34.0, 690.0], [34.1, 690.0], [34.2, 690.0], [34.3, 690.0], [34.4, 693.0], [34.5, 693.0], [34.6, 693.0], [34.7, 694.0], [34.8, 694.0], [34.9, 694.0], [35.0, 695.0], [35.1, 695.0], [35.2, 695.0], [35.3, 695.0], [35.4, 695.0], [35.5, 695.0], [35.6, 695.0], [35.7, 696.0], [35.8, 696.0], [35.9, 696.0], [36.0, 699.0], [36.1, 699.0], [36.2, 699.0], [36.3, 699.0], [36.4, 699.0], [36.5, 699.0], [36.6, 699.0], [36.7, 700.0], [36.8, 700.0], [36.9, 700.0], [37.0, 700.0], [37.1, 700.0], [37.2, 700.0], [37.3, 700.0], [37.4, 701.0], [37.5, 701.0], [37.6, 701.0], [37.7, 703.0], [37.8, 703.0], [37.9, 703.0], [38.0, 706.0], [38.1, 706.0], [38.2, 706.0], [38.3, 706.0], [38.4, 707.0], [38.5, 707.0], [38.6, 707.0], [38.7, 708.0], [38.8, 708.0], [38.9, 708.0], [39.0, 709.0], [39.1, 709.0], [39.2, 709.0], [39.3, 709.0], [39.4, 709.0], [39.5, 709.0], [39.6, 709.0], [39.7, 709.0], [39.8, 709.0], [39.9, 709.0], [40.0, 710.0], [40.1, 710.0], [40.2, 710.0], [40.3, 710.0], [40.4, 710.0], [40.5, 710.0], [40.6, 710.0], [40.7, 711.0], [40.8, 711.0], [40.9, 711.0], [41.0, 711.0], [41.1, 711.0], [41.2, 711.0], [41.3, 711.0], [41.4, 712.0], [41.5, 712.0], [41.6, 712.0], [41.7, 712.0], [41.8, 712.0], [41.9, 712.0], [42.0, 715.0], [42.1, 715.0], [42.2, 715.0], [42.3, 715.0], [42.4, 717.0], [42.5, 717.0], [42.6, 717.0], [42.7, 719.0], [42.8, 719.0], [42.9, 719.0], [43.0, 721.0], [43.1, 721.0], [43.2, 721.0], [43.3, 721.0], [43.4, 722.0], [43.5, 722.0], [43.6, 722.0], [43.7, 724.0], [43.8, 724.0], [43.9, 724.0], [44.0, 724.0], [44.1, 724.0], [44.2, 724.0], [44.3, 724.0], [44.4, 729.0], [44.5, 729.0], [44.6, 729.0], [44.7, 731.0], [44.8, 731.0], [44.9, 731.0], [45.0, 732.0], [45.1, 732.0], [45.2, 732.0], [45.3, 732.0], [45.4, 733.0], [45.5, 733.0], [45.6, 733.0], [45.7, 733.0], [45.8, 733.0], [45.9, 733.0], [46.0, 736.0], [46.1, 736.0], [46.2, 736.0], [46.3, 736.0], [46.4, 736.0], [46.5, 736.0], [46.6, 736.0], [46.7, 737.0], [46.8, 737.0], [46.9, 737.0], [47.0, 740.0], [47.1, 740.0], [47.2, 740.0], [47.3, 740.0], [47.4, 740.0], [47.5, 740.0], [47.6, 740.0], [47.7, 740.0], [47.8, 740.0], [47.9, 740.0], [48.0, 751.0], [48.1, 751.0], [48.2, 751.0], [48.3, 751.0], [48.4, 751.0], [48.5, 751.0], [48.6, 751.0], [48.7, 752.0], [48.8, 752.0], [48.9, 752.0], [49.0, 754.0], [49.1, 754.0], [49.2, 754.0], [49.3, 754.0], [49.4, 756.0], [49.5, 756.0], [49.6, 756.0], [49.7, 761.0], [49.8, 761.0], [49.9, 761.0], [50.0, 761.0], [50.1, 763.0], [50.2, 763.0], [50.3, 763.0], [50.4, 764.0], [50.5, 764.0], [50.6, 764.0], [50.7, 768.0], [50.8, 768.0], [50.9, 768.0], [51.0, 768.0], [51.1, 769.0], [51.2, 769.0], [51.3, 769.0], [51.4, 770.0], [51.5, 770.0], [51.6, 770.0], [51.7, 776.0], [51.8, 776.0], [51.9, 776.0], [52.0, 776.0], [52.1, 776.0], [52.2, 776.0], [52.3, 776.0], [52.4, 776.0], [52.5, 776.0], [52.6, 776.0], [52.7, 777.0], [52.8, 777.0], [52.9, 777.0], [53.0, 777.0], [53.1, 778.0], [53.2, 778.0], [53.3, 778.0], [53.4, 780.0], [53.5, 780.0], [53.6, 780.0], [53.7, 780.0], [53.8, 780.0], [53.9, 780.0], [54.0, 780.0], [54.1, 785.0], [54.2, 785.0], [54.3, 785.0], [54.4, 791.0], [54.5, 791.0], [54.6, 791.0], [54.7, 793.0], [54.8, 793.0], [54.9, 793.0], [55.0, 793.0], [55.1, 794.0], [55.2, 794.0], [55.3, 794.0], [55.4, 796.0], [55.5, 796.0], [55.6, 796.0], [55.7, 797.0], [55.8, 797.0], [55.9, 797.0], [56.0, 797.0], [56.1, 798.0], [56.2, 798.0], [56.3, 798.0], [56.4, 799.0], [56.5, 799.0], [56.6, 799.0], [56.7, 803.0], [56.8, 803.0], [56.9, 803.0], [57.0, 803.0], [57.1, 804.0], [57.2, 804.0], [57.3, 804.0], [57.4, 812.0], [57.5, 812.0], [57.6, 812.0], [57.7, 812.0], [57.8, 812.0], [57.9, 812.0], [58.0, 812.0], [58.1, 813.0], [58.2, 813.0], [58.3, 813.0], [58.4, 813.0], [58.5, 813.0], [58.6, 813.0], [58.7, 813.0], [58.8, 813.0], [58.9, 813.0], [59.0, 813.0], [59.1, 814.0], [59.2, 814.0], [59.3, 814.0], [59.4, 820.0], [59.5, 820.0], [59.6, 820.0], [59.7, 822.0], [59.8, 822.0], [59.9, 822.0], [60.0, 822.0], [60.1, 827.0], [60.2, 827.0], [60.3, 827.0], [60.4, 829.0], [60.5, 829.0], [60.6, 829.0], [60.7, 829.0], [60.8, 829.0], [60.9, 829.0], [61.0, 829.0], [61.1, 832.0], [61.2, 832.0], [61.3, 832.0], [61.4, 832.0], [61.5, 832.0], [61.6, 832.0], [61.7, 833.0], [61.8, 833.0], [61.9, 833.0], [62.0, 833.0], [62.1, 843.0], [62.2, 843.0], [62.3, 843.0], [62.4, 845.0], [62.5, 845.0], [62.6, 845.0], [62.7, 846.0], [62.8, 846.0], [62.9, 846.0], [63.0, 846.0], [63.1, 848.0], [63.2, 848.0], [63.3, 848.0], [63.4, 850.0], [63.5, 850.0], [63.6, 850.0], [63.7, 850.0], [63.8, 850.0], [63.9, 850.0], [64.0, 850.0], [64.1, 850.0], [64.2, 850.0], [64.3, 850.0], [64.4, 852.0], [64.5, 852.0], [64.6, 852.0], [64.7, 854.0], [64.8, 854.0], [64.9, 854.0], [65.0, 854.0], [65.1, 858.0], [65.2, 858.0], [65.3, 858.0], [65.4, 864.0], [65.5, 864.0], [65.6, 864.0], [65.7, 866.0], [65.8, 866.0], [65.9, 866.0], [66.0, 866.0], [66.1, 871.0], [66.2, 871.0], [66.3, 871.0], [66.4, 872.0], [66.5, 872.0], [66.6, 872.0], [66.7, 882.0], [66.8, 882.0], [66.9, 882.0], [67.0, 882.0], [67.1, 883.0], [67.2, 883.0], [67.3, 883.0], [67.4, 883.0], [67.5, 883.0], [67.6, 883.0], [67.7, 889.0], [67.8, 889.0], [67.9, 889.0], [68.0, 889.0], [68.1, 890.0], [68.2, 890.0], [68.3, 890.0], [68.4, 891.0], [68.5, 891.0], [68.6, 891.0], [68.7, 895.0], [68.8, 895.0], [68.9, 895.0], [69.0, 895.0], [69.1, 897.0], [69.2, 897.0], [69.3, 897.0], [69.4, 899.0], [69.5, 899.0], [69.6, 899.0], [69.7, 899.0], [69.8, 899.0], [69.9, 899.0], [70.0, 899.0], [70.1, 904.0], [70.2, 904.0], [70.3, 904.0], [70.4, 906.0], [70.5, 906.0], [70.6, 906.0], [70.7, 908.0], [70.8, 908.0], [70.9, 908.0], [71.0, 913.0], [71.1, 913.0], [71.2, 913.0], [71.3, 913.0], [71.4, 916.0], [71.5, 916.0], [71.6, 916.0], [71.7, 920.0], [71.8, 920.0], [71.9, 920.0], [72.0, 921.0], [72.1, 921.0], [72.2, 921.0], [72.3, 921.0], [72.4, 923.0], [72.5, 923.0], [72.6, 923.0], [72.7, 927.0], [72.8, 927.0], [72.9, 927.0], [73.0, 932.0], [73.1, 932.0], [73.2, 932.0], [73.3, 932.0], [73.4, 932.0], [73.5, 932.0], [73.6, 932.0], [73.7, 934.0], [73.8, 934.0], [73.9, 934.0], [74.0, 937.0], [74.1, 937.0], [74.2, 937.0], [74.3, 937.0], [74.4, 940.0], [74.5, 940.0], [74.6, 940.0], [74.7, 940.0], [74.8, 940.0], [74.9, 940.0], [75.0, 944.0], [75.1, 944.0], [75.2, 944.0], [75.3, 944.0], [75.4, 945.0], [75.5, 945.0], [75.6, 945.0], [75.7, 948.0], [75.8, 948.0], [75.9, 948.0], [76.0, 948.0], [76.1, 948.0], [76.2, 948.0], [76.3, 948.0], [76.4, 948.0], [76.5, 948.0], [76.6, 948.0], [76.7, 949.0], [76.8, 949.0], [76.9, 949.0], [77.0, 951.0], [77.1, 951.0], [77.2, 951.0], [77.3, 951.0], [77.4, 954.0], [77.5, 954.0], [77.6, 954.0], [77.7, 956.0], [77.8, 956.0], [77.9, 956.0], [78.0, 960.0], [78.1, 960.0], [78.2, 960.0], [78.3, 960.0], [78.4, 964.0], [78.5, 964.0], [78.6, 964.0], [78.7, 964.0], [78.8, 964.0], [78.9, 964.0], [79.0, 966.0], [79.1, 966.0], [79.2, 966.0], [79.3, 966.0], [79.4, 967.0], [79.5, 967.0], [79.6, 967.0], [79.7, 977.0], [79.8, 977.0], [79.9, 977.0], [80.0, 977.0], [80.1, 977.0], [80.2, 977.0], [80.3, 977.0], [80.4, 978.0], [80.5, 978.0], [80.6, 978.0], [80.7, 979.0], [80.8, 979.0], [80.9, 979.0], [81.0, 981.0], [81.1, 981.0], [81.2, 981.0], [81.3, 981.0], [81.4, 983.0], [81.5, 983.0], [81.6, 983.0], [81.7, 987.0], [81.8, 987.0], [81.9, 987.0], [82.0, 988.0], [82.1, 988.0], [82.2, 988.0], [82.3, 988.0], [82.4, 989.0], [82.5, 989.0], [82.6, 989.0], [82.7, 989.0], [82.8, 989.0], [82.9, 989.0], [83.0, 992.0], [83.1, 992.0], [83.2, 992.0], [83.3, 992.0], [83.4, 999.0], [83.5, 999.0], [83.6, 999.0], [83.7, 999.0], [83.8, 999.0], [83.9, 999.0], [84.0, 1000.0], [84.1, 1000.0], [84.2, 1000.0], [84.3, 1000.0], [84.4, 1001.0], [84.5, 1001.0], [84.6, 1001.0], [84.7, 1002.0], [84.8, 1002.0], [84.9, 1002.0], [85.0, 1002.0], [85.1, 1002.0], [85.2, 1002.0], [85.3, 1002.0], [85.4, 1003.0], [85.5, 1003.0], [85.6, 1003.0], [85.7, 1007.0], [85.8, 1007.0], [85.9, 1007.0], [86.0, 1009.0], [86.1, 1009.0], [86.2, 1009.0], [86.3, 1009.0], [86.4, 1010.0], [86.5, 1010.0], [86.6, 1010.0], [86.7, 1011.0], [86.8, 1011.0], [86.9, 1011.0], [87.0, 1011.0], [87.1, 1011.0], [87.2, 1011.0], [87.3, 1011.0], [87.4, 1014.0], [87.5, 1014.0], [87.6, 1014.0], [87.7, 1016.0], [87.8, 1016.0], [87.9, 1016.0], [88.0, 1021.0], [88.1, 1021.0], [88.2, 1021.0], [88.3, 1021.0], [88.4, 1021.0], [88.5, 1021.0], [88.6, 1021.0], [88.7, 1021.0], [88.8, 1021.0], [88.9, 1021.0], [89.0, 1024.0], [89.1, 1024.0], [89.2, 1024.0], [89.3, 1024.0], [89.4, 1028.0], [89.5, 1028.0], [89.6, 1028.0], [89.7, 1029.0], [89.8, 1029.0], [89.9, 1029.0], [90.0, 1031.0], [90.1, 1031.0], [90.2, 1031.0], [90.3, 1031.0], [90.4, 1033.0], [90.5, 1033.0], [90.6, 1033.0], [90.7, 1034.0], [90.8, 1034.0], [90.9, 1034.0], [91.0, 1034.0], [91.1, 1034.0], [91.2, 1034.0], [91.3, 1034.0], [91.4, 1035.0], [91.5, 1035.0], [91.6, 1035.0], [91.7, 1040.0], [91.8, 1040.0], [91.9, 1040.0], [92.0, 1044.0], [92.1, 1044.0], [92.2, 1044.0], [92.3, 1044.0], [92.4, 1047.0], [92.5, 1047.0], [92.6, 1047.0], [92.7, 1048.0], [92.8, 1048.0], [92.9, 1048.0], [93.0, 1048.0], [93.1, 1048.0], [93.2, 1048.0], [93.3, 1048.0], [93.4, 1050.0], [93.5, 1050.0], [93.6, 1050.0], [93.7, 1050.0], [93.8, 1050.0], [93.9, 1050.0], [94.0, 1054.0], [94.1, 1054.0], [94.2, 1054.0], [94.3, 1054.0], [94.4, 1057.0], [94.5, 1057.0], [94.6, 1057.0], [94.7, 1057.0], [94.8, 1057.0], [94.9, 1057.0], [95.0, 1063.0], [95.1, 1063.0], [95.2, 1063.0], [95.3, 1063.0], [95.4, 1063.0], [95.5, 1063.0], [95.6, 1063.0], [95.7, 1066.0], [95.8, 1066.0], [95.9, 1066.0], [96.0, 1069.0], [96.1, 1069.0], [96.2, 1069.0], [96.3, 1069.0], [96.4, 1075.0], [96.5, 1075.0], [96.6, 1075.0], [96.7, 1081.0], [96.8, 1081.0], [96.9, 1081.0], [97.0, 1083.0], [97.1, 1083.0], [97.2, 1083.0], [97.3, 1083.0], [97.4, 1087.0], [97.5, 1087.0], [97.6, 1087.0], [97.7, 1090.0], [97.8, 1090.0], [97.9, 1090.0], [98.0, 1092.0], [98.1, 1092.0], [98.2, 1092.0], [98.3, 1092.0], [98.4, 1094.0], [98.5, 1094.0], [98.6, 1094.0], [98.7, 1101.0], [98.8, 1101.0], [98.9, 1101.0], [99.0, 1101.0], [99.1, 1101.0], [99.2, 1101.0], [99.3, 1101.0], [99.4, 1114.0], [99.5, 1114.0], [99.6, 1114.0], [99.7, 1117.0], [99.8, 1117.0], [99.9, 1117.0]], "isOverall": false, "label": "GET receive_by_id", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 60.0, "series": [{"data": [[1100.0, 4.0], [300.0, 14.0], [600.0, 43.0], [700.0, 60.0], [100.0, 3.0], [200.0, 12.0], [400.0, 19.0], [800.0, 40.0], [900.0, 42.0], [500.0, 19.0], [1000.0, 44.0]], "isOverall": false, "label": "GET receive_by_id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 49.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 251.0, "series": [{"data": [[0.0, 49.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 134.31000000000003, "minX": 1.70713134E12, "maxY": 134.31000000000003, "series": [{"data": [[1.70713134E12, 134.31000000000003]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70713134E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 159.5, "minX": 1.0, "maxY": 1117.0, "series": [{"data": [[2.0, 1117.0], [3.0, 1092.0], [4.0, 1101.0], [5.0, 1114.0], [6.0, 1081.0], [7.0, 1069.0], [8.0, 1057.0], [9.0, 1083.0], [10.0, 1044.0], [11.0, 1090.0], [12.0, 1034.0], [14.0, 1074.5], [15.0, 1063.0], [16.0, 1021.0], [17.0, 1047.0], [18.0, 1035.0], [19.0, 1066.0], [20.0, 1021.0], [21.0, 1063.0], [23.0, 1048.0], [24.0, 1031.0], [25.0, 1048.0], [26.0, 1002.0], [27.0, 960.0], [28.0, 1028.0], [29.0, 1021.0], [30.0, 1054.0], [31.0, 1057.0], [33.0, 999.0], [32.0, 1007.0], [35.0, 1016.0], [34.0, 1075.0], [36.0, 1034.0], [39.0, 948.0], [38.0, 969.0], [41.0, 1002.0], [40.0, 1011.0], [43.0, 1029.0], [42.0, 1050.0], [45.0, 988.0], [44.0, 981.0], [46.0, 1001.0], [49.0, 978.0], [48.0, 1037.0], [51.0, 934.0], [50.0, 940.0], [53.0, 992.0], [52.0, 999.0], [55.0, 1014.0], [54.0, 1033.0], [57.0, 1040.0], [56.0, 983.0], [59.0, 989.0], [58.0, 967.0], [60.0, 964.0], [63.0, 923.0], [62.0, 962.0], [67.0, 964.0], [66.0, 1010.0], [65.0, 979.0], [64.0, 977.0], [71.0, 961.0], [69.0, 1011.0], [68.0, 1000.0], [75.0, 908.0], [74.0, 904.0], [73.0, 948.0], [72.0, 987.0], [79.0, 948.0], [78.0, 945.0], [77.0, 977.0], [76.0, 954.0], [83.0, 883.0], [82.0, 920.0], [81.0, 940.0], [80.0, 932.0], [87.0, 951.0], [86.0, 872.0], [85.0, 937.0], [84.0, 944.0], [90.0, 899.0], [89.0, 906.0], [88.0, 916.0], [95.0, 883.0], [94.0, 889.0], [93.0, 927.0], [92.0, 874.5], [99.0, 891.0], [98.0, 932.0], [97.0, 895.0], [96.0, 850.0], [103.0, 858.0], [102.0, 822.0], [101.0, 854.0], [100.0, 866.0], [107.0, 873.5], [105.0, 850.0], [104.0, 846.0], [111.0, 850.0], [110.0, 863.5], [108.0, 882.0], [115.0, 776.0], [114.0, 829.0], [113.0, 832.0], [112.0, 845.0], [119.0, 763.0], [118.0, 890.0], [117.0, 829.0], [116.0, 871.0], [123.0, 833.0], [122.0, 827.5], [120.0, 813.0], [126.0, 159.5], [127.0, 777.0], [125.0, 798.0], [124.0, 812.0], [134.0, 504.0], [135.0, 777.0], [133.0, 780.0], [132.0, 832.0], [131.0, 820.0], [130.0, 864.0], [129.0, 740.0], [128.0, 799.0], [143.0, 804.0], [142.0, 813.0], [141.0, 724.0], [140.0, 793.0], [139.0, 785.0], [138.0, 736.0], [137.0, 791.0], [136.0, 797.0], [151.0, 445.0], [149.0, 769.0], [148.0, 780.0], [147.0, 778.0], [146.0, 751.0], [145.0, 754.0], [144.0, 827.0], [155.0, 355.0], [153.0, 508.5], [152.0, 485.5], [157.0, 499.0], [156.0, 423.66666666666663], [159.0, 740.0], [158.0, 794.0], [154.0, 796.0], [165.0, 309.0], [167.0, 733.0], [166.0, 770.0], [164.0, 693.0], [163.0, 729.0], [162.0, 700.0], [161.0, 733.0], [160.0, 737.0], [170.0, 426.0], [171.0, 388.5], [169.0, 526.0], [175.0, 361.0], [173.0, 724.0], [172.0, 715.0], [168.0, 712.0], [183.0, 688.0], [181.0, 690.0], [180.0, 752.0], [179.0, 709.0], [178.0, 719.0], [177.0, 756.0], [176.0, 713.0], [187.0, 537.5], [191.0, 732.0], [190.0, 709.0], [189.0, 736.0], [188.0, 700.0], [186.0, 709.0], [185.0, 665.0], [184.0, 710.0], [192.0, 535.5], [196.0, 453.0], [195.0, 491.0], [197.0, 540.5], [199.0, 699.0], [198.0, 695.0], [194.0, 701.0], [193.0, 657.0], [206.0, 528.3333333333334], [207.0, 671.0], [205.0, 678.0], [204.0, 663.0], [203.0, 710.0], [202.0, 673.0], [201.0, 711.0], [200.0, 677.0], [209.0, 532.0], [210.0, 562.0], [213.0, 523.0], [214.0, 592.5], [215.0, 635.0], [212.0, 640.0], [211.0, 650.0], [208.0, 623.0], [217.0, 561.6666666666666], [216.0, 584.5], [220.0, 508.0], [221.0, 591.3333333333334], [223.0, 675.0], [222.0, 681.0], [219.0, 686.0], [218.0, 670.0], [225.0, 550.0], [228.0, 490.0], [227.0, 575.0], [226.0, 596.5], [229.0, 621.0], [230.0, 568.0], [231.0, 635.0], [224.0, 674.0], [232.0, 575.0], [237.0, 563.0], [239.0, 590.0], [238.0, 546.0], [236.0, 571.0], [235.0, 614.0], [234.0, 623.0], [233.0, 630.0], [240.0, 570.3333333333334], [1.0, 1094.0]], "isOverall": false, "label": "GET receive_by_id", "isController": false}, {"data": [[134.31000000000003, 748.5433333333335]], "isOverall": false, "label": "GET receive_by_id-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 240.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1010.0, "minX": 1.70713134E12, "maxY": 50625.0, "series": [{"data": [[1.70713134E12, 50625.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70713134E12, 1010.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70713134E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 748.5433333333335, "minX": 1.70713134E12, "maxY": 748.5433333333335, "series": [{"data": [[1.70713134E12, 748.5433333333335]], "isOverall": false, "label": "GET receive_by_id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70713134E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 748.2933333333331, "minX": 1.70713134E12, "maxY": 748.2933333333331, "series": [{"data": [[1.70713134E12, 748.2933333333331]], "isOverall": false, "label": "GET receive_by_id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70713134E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 10.25, "minX": 1.70713134E12, "maxY": 10.25, "series": [{"data": [[1.70713134E12, 10.25]], "isOverall": false, "label": "GET receive_by_id", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70713134E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 156.0, "minX": 1.70713134E12, "maxY": 1117.0, "series": [{"data": [[1.70713134E12, 1117.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70713134E12, 1030.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70713134E12, 1101.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70713134E12, 1062.6999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70713134E12, 156.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70713134E12, 762.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70713134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 495.0, "minX": 96.0, "maxY": 868.5, "series": [{"data": [[96.0, 495.0], [204.0, 868.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 204.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 495.0, "minX": 96.0, "maxY": 868.5, "series": [{"data": [[96.0, 495.0], [204.0, 868.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 204.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.70713134E12, "maxY": 5.0, "series": [{"data": [[1.70713134E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70713134E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.70713134E12, "maxY": 5.0, "series": [{"data": [[1.70713134E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70713134E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.70713134E12, "maxY": 5.0, "series": [{"data": [[1.70713134E12, 5.0]], "isOverall": false, "label": "GET receive_by_id-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70713134E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.0, "minX": 1.70713134E12, "maxY": 5.0, "series": [{"data": [[1.70713134E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70713134E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

