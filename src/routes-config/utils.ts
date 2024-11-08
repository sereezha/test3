export const generateMailListRoute = (
  emailType: string,
  accountId: string,
  categoryId: string
) => {
  return `/${emailType}/${accountId}/${categoryId}`;
};

export const generateEmailRoute = (
  emailType: string,
  accountId: string,
  categoryId: string,
  emailId: string
) => {
  return `${generateMailListRoute(emailType, accountId, categoryId)}/${emailId}`;
};
