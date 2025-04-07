import React, { useState} from 'react';
import './App.css';
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers } from '@jsonforms/vanilla-renderers';
import TextFieldRenderer from './shared/TextFieldRenderer';
import EnumFieldRenderer from './shared/EnumFieldRenderer';
import MultiLineTextFieldRenderer from './shared/MultiLineTextFieldRenderer';
import CountriesArrayRenderer from './shared/CountriesArrayRenderer';
import schema from './data/schema.json';
import uischema from './data/uischema.json';
import { ControlElement, JsonSchema, UISchemaElement } from '@jsonforms/core';

const renderers = [
  ...vanillaRenderers,
  { 
    tester: (uischema: UISchemaElement, _schema: JsonSchema) => {
      if (!isControl(uischema)) return -1;
      return (uischema as ControlElement).scope?.endsWith('a08') ? 5 : -1;

    },
    renderer: TextFieldRenderer 
  },
  {
    tester: (uischema: UISchemaElement, schema: JsonSchema) => 
      schema?.enum ? 6 : -1,
    renderer: EnumFieldRenderer
  },
  {
    tester: (uischema: UISchemaElement, _schema: JsonSchema) => {
      if (!isControl(uischema)) return -1;
      return (uischema as ControlElement).scope?.endsWith('s01') ? 6 : -1;
    },
    renderer: EnumFieldRenderer
  },
  {
    tester: (uischema: UISchemaElement, _schema: JsonSchema) => {
      if (!isControl(uischema)) return -1;
      return (uischema as ControlElement).scope?.endsWith('a09') ? 7 : -1;
    },
    renderer: MultiLineTextFieldRenderer
  },
  {
    tester: (uischema: UISchemaElement, _schema: JsonSchema) => {
      if (!isControl(uischema)) return -1;
      return (uischema as ControlElement).scope?.endsWith('i01') ? 8 : -1;
    },
    renderer: CountriesArrayRenderer
  }
];

function isControl(uischema: UISchemaElement): uischema is ControlElement {
  return (uischema as ControlElement).type === 'Control';
}

const initialData = {
  
    user: {
      "a08": "Marie Dupont",
      "a09": "Développeuse fullstack avec 5 ans d'expérience.\nExpertise en React, Node.js et architectures microservices.\nCertifiée AWS Solutions Architect."
    },
    item: {
      "s01": [
        "vendor",
        "parent company"
      ],
      "p02": "no",
      "i01": [
        {
          "country": "France",
          "percent": 70
        },
        {
          "country": "Germany",
          "percent": 20
        },
        {
          "country": "United States of America",
          "percent": 10
        }
      ]
    }
  
};
function App() {
  const [data, setData] = useState(initialData);

  return (
    <div className="container">
      <h1>User Profile</h1>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        readonly={true}
      />
    </div>

  );
}

export default App;
