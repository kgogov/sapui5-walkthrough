# Walkthrough notes

Before we can do something with SAPUI5, we need to load and initialize it. \
This process of loading and initializing SAPUI5 is called **bootstrapping**.

SAPUI5 Controls are used to define appearance and behavior of parts of the screen. \
All controls of SAPUI5 have a fixed set of properties, aggregations, and associations for configuration. \
You can find their descriptions in the [Demo Kit](https://sapui5.hana.ondemand.com/#/api).

SAPUI5 supports multiple view types (XML, HTML, JavaScript). \
We choose XML as this produces the most readable code and will force us to separate the view declaration from the controller logic.

A view does not necessarily need an explicitly assigned controller. \
You do not have to create a controller if the view is just displaying information and no additional functionality is required. \
If a controller is specified, it is instantiated after the view is loaded.

In SAPUI5, resources are often referred to as modules.

We add an init function to the controller. \
`onInit` is one of SAPUI5’s lifecycle methods that is invoked by the framework when the controller is created, similar to a constructor function of a control.

For more information please refer to [this](https://blogs.sap.com/2018/11/12/sapui5-controller-lifecycle-methods-explained/) blog post.

Components are independent and reusable parts used in SAPUI5 applications. \
This architectural change allows our app to be used in more flexible environments than our static **index.html** page, such as in a surrounding container like the SAP Fiori launchpad.

All application-specific configuration settings will now further be put in a separate descriptor file called **manifest.json** \
This clearly separates the application coding from the configuration settings and makes our app even more flexible. \
For example, all SAP Fiori applications are realized as components and come with a descriptor file in order to be hosted in the SAP Fiori launchpad.

The content of the **manifest.json** file is a configuration object in JSON format that contains all global application settings and parameters. \
The manifest file is called the descriptor for applications, components, and libraries and is also referred to as “descriptor” or “app descriptor” when used for applications. \
There are three important sections defined by namespaces in the manifest.json file:
* **sap.app**
* **sap.ui**
* **sap.ui5**

Automatic model instantiation is only available as of SAPUI5 version 1.30.

After all the work on the app structure it’s time to improve the look of our app. \
We will use two controls from the **sap.m** library to add a bit more "bling" to our UI. You will also learn about control aggregations in this step.

## Conventions

* Name of the root HTML file of the app is `index.html`
* View names are capitalized
* All views are stored in the view folder
* Names of XML views always end with `*.view.xml`
* The default XML namespace is **sap.m**
* Other XML namespaces use the last part of the SAP namespace as alias (for example, **mvc** for **sap.ui.core.mvc**)
* Controller names are capitalized
* Event handlers are prefixed with on
* Controller names always end with `*.controller.js`
* Use Hungarian notation for variable names.
* The resource model for internationalization is called the i18n model.
* The default filename is **i18n.properties**.
* Resource bundle keys are written in (lower) camelCase.
* Resource bundle values can contain parameters like {0}, {1}, {2}, …
  * Never concatenate strings that are translated, always use placeholders.
  * Use Unicode escape sequences for special characters.
* The descriptor file is named **manifest.json**
* Use translatable strings for the title and the description of the app.

## Framework specifics

* Only instances of `sap.ui.core.Control` or their subclasses can be rendered stand-alone and have a `placeAt` function. \
  Each control extends `sap.ui.core.Element` that can only be rendered inside controls.
* The namespace identifies all resources of the project and has to be unique. \
  If you develop your own application code or controls, you cannot use the namespace prefix **sap**, because this namespace is reserved for SAP resources.
* Use `sap.ui.define` for controllers and all other JavaScript modules to define a global namespace.
* Use `sap.ui.require` for asynchronously loading dependencies but without declaring a namespace, for example code that just needs to be executed, but does not need to be called from other code.
  * Use the name of the artifact to load for naming the function parameters (without namespace).
* The curly brackets {…} indicate that data is taken from the value of the `recipient`'s object name property. This is called **"data binding"**.
* The process of internationalization – in short i18n – is achieved in SAPUI5 by using a special resource model and the standard data binding syntax, but without preceding /.
