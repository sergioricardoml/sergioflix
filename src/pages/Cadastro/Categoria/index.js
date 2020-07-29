import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const categoryInitialValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(categoryInitialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, newCategory]);
    console.log(newCategory)
    console.log(categories);

    setNewCategory(categoryInitialValues);
  }

  const setValues = (key, value) => {
    setNewCategory({
      ...newCategory,
      [key]: value
    })
  }

  const handleChange = ({ target }) => {
    setValues(
      target.getAttribute('name'), 
      target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {newCategory.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="name"
          value={newCategory.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={newCategory.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="color"
          value={newCategory.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category.name}${index}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;