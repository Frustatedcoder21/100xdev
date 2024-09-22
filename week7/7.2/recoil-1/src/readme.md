const[count,setcount]=useState(0);
here ,
count= useRecoilValue(),
useState(0)=useRecoilState(0),
setCount=useRecoilSetState();

// we use recoil we have to define state in other file and component in other file
// we  use useState when we have to use state variable where it is defined