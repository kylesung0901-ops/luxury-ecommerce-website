import { test, expect } from '@playwright/test';

test('홈페이지 로드 테스트', async ({ page }) => {
  await page.goto('/');
  
  // 페이지 제목 확인
  await expect(page).toHaveTitle(/Luxury E-commerce Website/);
  
  // 헤더 확인
  const header = page.locator('header');
  await expect(header).toBeVisible();
  
  // 헤더 내 로고 확인 (더 구체적으로)
  const logo = header.getByText('APEX BUILD').first();
  await expect(logo).toBeVisible();
});

test('로그인 모달 열기 테스트', async ({ page }) => {
  await page.goto('/');
  
  // 로그인 버튼 클릭
  const loginButton = page.getByRole('button', { name: '로그인' }).first();
  await loginButton.click();
  
  // 로그인 모달 확인
  const loginModal = page.locator('h2:has-text("로그인")');
  await expect(loginModal).toBeVisible();
  
  // 모달 내 이메일 입력 필드 확인 (모달 내부로 범위 제한)
  const modal = page.locator('[class*="bg-zinc-900"]').filter({ hasText: '로그인' }).first();
  const emailInput = modal.getByPlaceholder('email@example.com');
  await expect(emailInput).toBeVisible();
});

test('회원가입 모달 열기 테스트', async ({ page }) => {
  await page.goto('/');
  
  // 회원가입 버튼 클릭
  const signupButton = page.getByRole('button', { name: '회원가입' }).first();
  await signupButton.click();
  
  // 회원가입 모달 확인
  const signupModal = page.locator('h2:has-text("회원가입")');
  await expect(signupModal).toBeVisible();
  
  // 모달 내 이름 입력 필드 확인 (모달 내부로 범위 제한)
  const modal = page.locator('[class*="bg-zinc-900"]').filter({ hasText: '회원가입' }).first();
  const nameInput = modal.getByPlaceholder('홍길동');
  await expect(nameInput).toBeVisible();
});

