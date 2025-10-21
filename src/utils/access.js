import { ROLES } from "@/utils/roles";

export function canAccess(role, access) {
  if (access === "all") return true;
  if (access === "unloged" && role === ROLES.UNLOGED) return true;
  if (access === "loged" && role !== ROLES.UNLOGED) return true;
  if (access === "teacher" && role === ROLES.TEACHER) return true;
  if (access === "admin" && role === ROLES.ADMIN) return true;
  return false;
}