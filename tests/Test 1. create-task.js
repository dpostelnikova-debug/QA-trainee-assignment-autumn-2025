const { test, expect } = require('@playwright/test');

test('Создание задачи', async ({ page }) => {
  // Открываем список задач
  await page.goto('https://avito-tech-internship-psi.vercel.app/issues');

  // Открываем
  await page.getByRole('button', { name: 'Создать задачу' }).click();

  // Заполняем название и описание
  const title = page.getByPlaceholder('Название');
  const desc = page.getByPlaceholder('Описание');

  await expect(title).toBeVisible();
  await title.fill('Задача для автотеста (Playwright)');
  await desc.fill('Описание задачи для автотеста');

  // Выбор из выпадающих списков
  // Проект
  await page.getByText('Проект').click();
  await page.getByRole('option', { name: /Название проекта/i }).click();

  // Приоритет
  await page.getByText('Приоритет').click();
  await page.getByRole('option', { name: /Высокий/i }).click();

  // Исполнитель
  await page.getByText('Исполнитель').click();
  await page.getByRole('option', { name: /Александра Ветрова/i }).click();

  // Создать
  await page.getByRole('button', { name: 'Создать' }).click();

  // Проверка результата: задача появилась в списке
  await expect(page.getByText('Задача для автотеста (Playwright)')).toBeVisible();
});
