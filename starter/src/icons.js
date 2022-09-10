/**React-redux toolkit app - version 1  - 'icons' js - 
 * Features:
 * 
 *      --> Building 'Testing' icon that 
 *          - notice this icons are JSX Components
 *           and highly customizable - 
 * 
 * Note: reference to get this icon:
 * 
 *    - [Hero Icons](https://heroicons.com/)
 * 
 * also i can check the refrence in the readme file.
 */

export const CartIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 '
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
      />
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
};

export const ChevronUp = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
    </svg>
  );
};

/**Be sure to copy them as 'JSX', with svg can render
 * but will throw error with some attributes.*/
export const Testing = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      className="w-6 h-6"
      >
        
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

  )
}
