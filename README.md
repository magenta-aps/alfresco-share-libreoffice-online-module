LibreOffice Edit Online Alfresco Share AMP module (V1)
========

This is an Alfresco Share AMP module that exposes the LibreOffice OnLine application client.<br/>
It adds a LibreOffice page to alfresco share wherein the LOOL client is loaded in an iframe.
It also adds a document library action button to document library views.<br/>
Works in conjunction with the repository AMP module (https://github.com/magenta-aps/alfresco-repo-libreoffice-online-module).<br/>
This module was developed against Alfresco version 5.0.d and as such, works with the default Aikau version that ships with that version of Alfresco Share.       
        
### Alfresco Aikau
See https://github.com/Alfresco/Aikau for information about the Aikau UI Framework

### LibreOffice OnLine (LOOL) Installation
See LibreOffice Online Github page: https://github.com/LibreOffice/online for the latest installation instructions.

# Alfresco SDK 3 notes

To run this module use `mvn clean install -DskipTests=true alfresco:run` or `./run.sh` and verify that it 

 * Runs the embedded Tomcat + H2 DB 
 * Runs Alfresco Share
 * Packages both as JAR and AMP assembly

Note. You access Share as follows: http://localhost:8081/share
 
Note. You need an Alfresco Platform instance running at http://localhost:8080/alfresco that Share can talk to.
      Typically you will just kick off a platform-jar module for that.

Few things to notice:

 * No parent pom
 * WAR assembly is handled by the Alfresco Maven Plugin configuration, if needed
 * Standard JAR packaging and layout
 * Works seamlessly with Eclipse and IntelliJ IDEA
 * JRebel for hot reloading, JRebel maven plugin for generating rebel.xml, agent usage: `MAVEN_OPTS=-Xms256m -Xmx1G -agentpath:/home/martin/apps/jrebel/lib/libjrebel64.so`
 * AMP as an assembly
 * [Configurable Run mojo](https://github.com/Alfresco/alfresco-sdk/blob/sdk-3.0/plugins/alfresco-maven-plugin/src/main/java/org/alfresco/maven/plugin/RunMojo.java) in the `alfresco-maven-plugin`
 * No unit testing/functional tests just yet
 * Resources loaded from META-INF
 * Web Fragment (this includes a sample servlet configured via web fragment)

### License

This code is released and distributed under the Mozilla Public License 2.0 (https://opensource.org/licenses/MPL-2.0 https://tldrlegal.com/license/mozilla-public-license-2.0-%28mpl-2%29).

### Installing

See http://docs.alfresco.com/5.0/tasks/dev-extensions-tutorials-simple-module-install-amp.html for how to install this module in your Alfresco share installation

### JDK 7+

The page module evaluator requires JDK higher than or equal to version 7. Go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and click on button "Download JDK".  There are installation instructions on that page as well. To verify that your installation was successful, run "java -version" on the command line.  That should print the installed version of your JDK.

### Contributing

Submit pull a pull request

### Reporting problems

Every self-respecting developer should have read link on how to ask smart questions: http://www.catb.org/~esr/faqs/smart-questions.html.

After you've done that you can create issues in https://github.com/magenta-aps/libreoffice-online-share/issues.

