import {
  ApplicationSubmitAsChoice,
  ApplicationTypeChoice,
} from "../services/types";

export const roles: { label: string; value: ApplicationSubmitAsChoice }[] = [
  {
    label: "Talaba",
    value: ApplicationSubmitAsChoice.STUDENT,
  },
  {
    label: "Amaliyotchi muhandis",
    value: ApplicationSubmitAsChoice.PRACTICAL_ENGINEER,
  },
  {
    label: "Professor-o‘qituvchi",
    value: ApplicationSubmitAsChoice.PROFESSOR_TEACHER,
  },
];

export const specialities: { label: string; value: ApplicationTypeChoice }[] = [
  {
    label: "G’oya",
    value: ApplicationTypeChoice.Idea,
  },
  {
    label: "Loyiha",
    value: ApplicationTypeChoice.Project,
  },
  {
    label: "Ixtiro",
    value: ApplicationTypeChoice.Invention,
  },
];
