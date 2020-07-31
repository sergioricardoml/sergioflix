import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoryInitialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(categoryInitialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, newCategory]);
    console.log(newCategory);
    console.log(categories);

    setNewCategory(categoryInitialValues);
  };

  const setValues = (key, value) => {
    setNewCategory({
      ...newCategory,
      [key]: value,
    });
  };

  const handleChange = ({ target }) => {
    setValues(
      target.getAttribute('name'),
      target.value,
    );
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (responseFromServer) => {
        if (responseFromServer.ok) {
          const response = await responseFromServer.json();
          setCategories(response);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {newCategory.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={newCategory.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={newCategory.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={newCategory.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
