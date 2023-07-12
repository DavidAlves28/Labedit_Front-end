// buttons para navegação de Pages
export const goToLogin=  (navigate) => { 
    navigate('/')
}
export const goToSignup =  (navigate) => { 
    navigate('/signupPage')
}
export const goToContent =  (navigate) => { 
    navigate('/publications')
}
export const goToCommentToPost =  (navigate,id) => { 
    navigate(`/publications/${id}`)
}