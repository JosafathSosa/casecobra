"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveConfArgs = {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

export async function saveConf({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfArgs) {
  await db.configuration.update({
    where: {
      id: configId,
    },
    data: { color, finish, material, model },
  });
}
