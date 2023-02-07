import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { name } from "../../data/productos";

const SearchForm = ({ onChange }) => {
  const [query, setQuery] = useState({
    name: ""
  });

  useEffect(() => {
    onChange(query);
  }, [onChange, query]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>INGRESAR PRODUCTO</Form.Label>
        <Form.Control
          type="name"
          placeholder="Ingresar texto para buscar por nombre"
          value={query.name}
          onChange={(e) =>
            setQuery((prevState) => ({ ...prevState, name: e.target.value }))
          }
        />
      </Form.Group>
    </Form>
  );
};

export { SearchForm };
