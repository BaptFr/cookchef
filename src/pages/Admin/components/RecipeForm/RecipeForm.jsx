import styles from './RecipeForm.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { ApiContext } from '../../../../context/ApiContext';


function RecipeForm () {

    const BASE_URL = useContext(ApiContext);
    //Default values used to reset the form
    const defaultValues = {
        title: '',
        image: ''
    }

    //Yup form errors config.
    const recipeSchema = yup.object({
        title: yup
            .string()
            .required('Le titre de la recette doit être renseigné')
            .min(10, 'Le titre doit être explicite')
            .max(30, 'Le titre doit être succinct'),
        image: yup
            .string()
            .required('euillez indiquer un lien valide')
            .url('L\'image doit être un lien valide'),
    });

    //Is submitting to disabled the form in the submitting <button>
    const  {
        formState: { errors, isSubmitting},
        register,
        handleSubmit,
        reset,
        setError,
        clearErrors,
    } = useForm ( {
        defaultValues,
        resolver: yupResolver(recipeSchema)
    });

    async function submit (values) {
        try {
            //To reset errors
            clearErrors();
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers :{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
           if (response.ok) {
            reset(defaultValues);
           }else{
            setError('generic', {
                type: 'generic',
                message :'Il y a eu une erreur.'});
           }
        } catch (e) {
            setError('generic', { type: 'generic', message :'Il y a eu une erreur.'});
        }
    }


    return (
        <form onSubmit={handleSubmit(submit)}
        className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
        >
            <h2 className='mb-20'>Ajouter une recette</h2>
            <div className='d-flex flex-column mb-20'>
                <label>Titre de la recette</label>
                <input {...register('title') } type="text" /> {/*Required recup*/}
                {errors.title && <p className='form-error'>{ errors.title.message}</p> }  {/*title error message*/}
            </div>
            <div className='d-flex flex-column mb-20'>
                <label>URL de l'image pour la recette</label>
                <input {...register('image') } type="text" />
                {errors.image && <p className='form-error'>{ errors.image.message}</p> }
            </div>
            {errors.generic && <p className='form-error'>{ errors.generic.message} </p>} {/*Generic error*/}
            <div>
                <button disabled={isSubmitting} className='btn btn-primary'>Sauvegarder</button>
            </div>
        </form>
    )
}

export default RecipeForm;