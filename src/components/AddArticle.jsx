import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

export const AddArticle = () => {
  const NewArticle = () => (
    <Formik
      initialValues={{
        name: '',
        price: 0,
        stock: 0
      }}
      validate={Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        stock: Yup.number().required('Required')
      })}
      onSubmit={values => {
        axios.post('https://localhost:7247/api/Article', values).then(response => {
          console.log(response);
        });
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' onChange={handleChange} value={values.name} />
          <label htmlFor='price'>Price</label>
          <input type='number' name='price' onChange={handleChange} value={values.price} />
          <label htmlFor='stock'>Stock</label>
          <input type='number' name='stock' onChange={handleChange} value={values.stock} />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
  return (
    <div>
      <h1>Add Article</h1>
      <NewArticle />
    </div>
  );
};
