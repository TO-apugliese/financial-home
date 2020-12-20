export enum Pages {
  LOGIN = 'login',
  DASHBOARD = 'dashboard',
  OUTGOINGS = 'ausgaben',
  SAVING_GOALS = 'sparziele',
}

export const PagesConfig = new Map<Pages, string[]>(
  [
    [Pages.LOGIN, []],
    [Pages.DASHBOARD, []],
    [Pages.OUTGOINGS, ['fix-costs', 'variable-costs']],
    [Pages.SAVING_GOALS, []]
  ]
);
