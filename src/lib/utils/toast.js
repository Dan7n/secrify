import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
    theme: {
      '--toastBackground': 'green',
      '--toastColor': 'white',
      '--toastBarBackground': 'olive'
    }
  })
  
  export const danger = m => toast.push(m, {
    theme: {
        '--toastBackground': '#ef233c',
        '--toastBarBackground': '#d90429'
      }
  })