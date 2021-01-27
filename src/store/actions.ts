import { showAlert } from './messageReducer';

export function toggleNavbarDropdownMenu() {
  const menu = document.getElementById('navbarSupportedContent');
  const auth = document.getElementById('navbarSupportedRegForms');
  if (auth.classList.toString().includes('show')) {
    auth.classList.toggle('show');
  }
  if (menu.classList.toString().includes('show')) {
    menu.classList.toggle('show');
  }
}

export function proceedToCheckout(lang: string) {
  if (lang === 'eng') {
    return showAlert('Log in first, please');
  }
  return showAlert('Войдите в личный кабинет');
}
