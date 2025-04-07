import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import 'bootstrap/dist/css/bootstrap.min.css'

const TextFieldRenderer = ({ label, description, data }: ControlProps) => (
  <div className="row mb-3">
    <div className="col-md-4">
      <label className="form-label fw-bold">{label}</label>
      {description && <small className="text-muted d-block">{description}</small>}
    </div>
    <div className="col-md-8">
      <div className="p-2 border-bottom">{data || <span className="text-muted">Non renseigné</span>}</div>
    </div>
  </div>
);

export default withJsonFormsControlProps(TextFieldRenderer);