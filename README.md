# Handlebars Template Creator

Handlebars Template Creator is a project designed to help you create templates using Handlebars, a powerful and flexible templating engine for JavaScript. With this tool, you can quickly generate HTML templates based on your data and custom helper functions.

## How to Use

1. **Installation**:
   Make sure you have Node.js installed on your system. Then, run the following command to install the project dependencies:

   ```
   npm install
   ```

2. **Generating Templates**:
   To start using the template creator, simply run the following command:

   ```
   npm start
   ```

   The project will automatically track any changes you make to the `src` directory and compile the template into `src/compiled/index.html` whenever you save it.

3. **Data Source**:
   The source data for your templates should be provided in the `src/data.json` file. Update the JSON data as needed, and your template will dynamically adapt to the changes.

4. **Writing Templates**:
   In the `src/template.hbs` file, you can write your Handlebars template. Leverage the power of Handlebars syntax to create dynamic and reusable templates.

5. **Custom Helpers**:
   You can enhance your templates by creating custom helper functions in the `src/helpers.js` file. Register these helpers using `Handlebars.registerHelper`, and they will be available for use in your templates.

6. **Previewing the Template**:
   To view the generated template, start a live server that watches the `src/compiled/index.html` file. You can use any local development server or tools like Live Server to achieve this.

And that's it! You can now effortlessly create and manage your templates using Handlebars Template Creator. Enjoy the simplicity and flexibility of Handlebars to build dynamic and data-driven web pages!