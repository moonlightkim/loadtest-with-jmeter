# Overview
This repo shows how to use JMeter for performance testing.
- Tool - https://jmeter.apache.org

# Setup
### 1. Install Java (for mac)
- Download Java from [here](https://www.java.com/en/download/).
- Follow this [reference](https://www.java.com/en/download/help/mac_install.html) to install.
- Check if Java is installed by opening terminal and run:
    ```
    java -version
    ```

### 2. Install JMeter
- Download JMeter zip file from [here](https://jmeter.apache.org/download_jmeter.cgi#binaries).
- Extract the file.
- Open the terminal and run **jmeter.sh** file:
    ```
    source path/to/bin/jmeter.sh
    ```
- JMeter GUI will appear.

# Basic Usage
### 1. Create a test plan
- Launch JMeter GUI to create a test plan by referring to "Basic usage of JMeter" section of the [Detail note](https://gigantic-handle-104.notion.site/JMeter-vs-Locust-Report-e8156734c7a34fbab098ef8ba4fb4394).
- Save it. (Ex: loadTestGoogleServer.jmx)

### 2. Run test
- Run test in CLI mode is recommended. Open terminal and run command below. Example command for test plan named "loadTestGoogleServer.jmx":
    ```
    path/to/bin/jmeter -n -t loadTestGoogleServer.jmx -l loadTestGoogleServerResults.csv
    ```

# Reference
- [Detail note](https://gigantic-handle-104.notion.site/JMeter-vs-Locust-Report-e8156734c7a34fbab098ef8ba4fb4394)