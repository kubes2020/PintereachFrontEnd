import * as yup from 'yup'


const AddArticle = yup.object().shape ({
    articleName: yup
        .string()
        .required('Article name is required'),

    articleURL: yup
        .string()
        .required('Article URL is required'),

    category: yup
        .string()
        .oneOf(['Automotive', 'Books', 'Economics', 'Education', 'Gaming', 'Humor', 'Hobbies', 'Movies', 'Music', 'News', 'Politics', 'Recipes', 'Restaurants', 'Sports', 'Technology', 'TV Shows', 'Other']),

    rating: yup
        .string()
        .oneOf(['1', '2', '3', '4', '5'], 'rating is required')
})

export default AddArticle

