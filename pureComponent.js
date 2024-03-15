function sum(a,b){
    return a+b
}


let a=13
function sum(b){
    return a+b
}

// Pure components are the components which render the same output for the same state and
//  props. In function 
// components, you can achieve these pure components through memoized React.memo() 
// API wrapping around the component. This API prevents unnecessary re-renders by 
// comparing the previous props and new props using shallow comparison. So it will be helpful 
// for performance optimizations.

// But at the same time, it won't compare the previous state with the current
//  state because function component itself prevents the unnecessary rendering by 
//  default when you set the same state again.


const ImageComponent=React.memo(({src,alt})=>{
    return(
    
        <div className='embed-container p-0'>
          <img src={src} alt={alt} loading='lazy'></img>
  
        </div>
    )
  })
  export default ImageComponent

  //In class components, the components extending React.PureComponent 
//   instead of React.Component become the pure components. When props or state changes, 
//   PureComponent will do 
//   a shallow comparison on both props and state by invoking 
//   shouldComponentUpdate() lifecycle method.