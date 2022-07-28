import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
    theme: {
      '--toastBackground': '#1bc670',
      '--toastColor': 'white',
      '--toastBarBackground': '#b7e4c7'
    }
  })
  
  export const danger = m => toast.push(m, {
    theme: {
        '--toastBackground': '#ef233c',
        '--toastBarBackground': '#d90429'
      }
  })