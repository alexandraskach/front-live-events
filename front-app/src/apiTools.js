const canWriteRoles = ["ROLE_WRITER", "ROLE_ADMIN", "ROLE_SUPERADMIN"];

export const canWrite = (userData) => {
  console.log(userData);
  return (
    null !== userData &&
    userData.roles.some((userRoles) => canWriteRoles.includes(userRoles))
  );
};
