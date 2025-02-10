import './App.css'

import {Button} from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App(){
  return (
    <>
      <div className='flex'>

        <div>
        <Button endIcon={<ShareIcon size={'lg'}/>} 
        size='md' variant="secondary" 
        text="Add Content">
        </Button>
        </div>
        <div className='pl-4 pr-6'>
        <Button startIcon={<PlusIcon size={'lg'}/>}
          size='sm' 
          variant="primary" 
        
          text="share">
        </Button>
        </div>
        
      </div>

    </>
  )
}
export default App