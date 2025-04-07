import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnumFieldRenderer = ({ label, description, data, schema }: ControlProps) => {
  const isMultiSelect = schema.type === 'array';
  const selectedValues = isMultiSelect ? (Array.isArray(data) ? data : []) : data ? [data] : [];

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-sm-4">
        <label className="form-label fw-bold mb-0">{label}</label>
        {description && (
          <small className="text-muted d-block">{description}</small>
        )}
      </div>

      <div className="col-sm-8">
        <div className="d-flex flex-wrap justify-content-end gap-2">
          {selectedValues.length > 0 ? (
            selectedValues.map((value, index) => (
              <span key={index} className="badge bg-primary rounded-pill">
                {value}
              </span>
            ))
          ) : (
            <span className="badge bg-secondary rounded-pill" >
              Not selected
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default withJsonFormsControlProps(EnumFieldRenderer);