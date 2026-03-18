import baseAxios from "@/api/base";
import { APP_ROUTES } from "@/api/constants/common";
import {
    ExampleGet,
    ExamplePatch,
    ExamplePost,
    ExamplePostData,
} from "@/api/types/exampleTypes";


export const examplePost = async (
  dataToPost: ExamplePostData
) => {
  try {
    await baseAxios.post<ExamplePost>(
      `${APP_ROUTES.V1}/example`,
      dataToPost
    );
  } catch (e) {
    throw e;
  }
};

export const exampleGetById = async (id: string) => {
  try {
    const axiosExampleGetById =
      await baseAxios.get<ExampleGet>(
        `${APP_ROUTES.V1}/example//login/validate?login=${id}`
      );
    return axiosExampleGetById.data;
  } catch (e) {
    throw e;
  }
};

export const exampleGetAll = async () => {
  try {
    const axiosExampleGetAll = await baseAxios.get<ExampleGet[]>(
      `${APP_ROUTES.V1}/example/profiles`
    );
    return axiosExampleGetAll.data;
  } catch (e) {
    throw e;
  }
};


export const examplePatch = async (
  id: number,
  data: string
) => {
  try {
    return await baseAxios.patch<ExamplePatch>(
      `${APP_ROUTES.V1}/example/${id}/some-service`,
      data
    );
  } catch (e) {
    throw e;
  }
};
