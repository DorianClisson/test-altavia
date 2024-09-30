const usersWebServicesBaseUrl = "http://localhost:3000/users";
const postPutHeaders = {"Content-Type": "application/json"};

function computePostPutBody(firstName, lastName, email)
{
  return JSON.stringify({firstName, lastName, email});
}

async function throwResponseError(response)
{
  const message = JSON.parse((await response.text())).message;
  throw new Error(message);
}

const delayResponse = async (callback) =>
{
  return await new Promise((resolve, reject) =>
    {
      setTimeout(() =>
      {
        try
        {
          const result = callback();
          resolve(result);
        }
        catch (error)
        {
          reject(error);
        }
      }, Math.random() * 1000);
    }
  );
};

export async function getUsers()
{
  console.info("Getting the users");
  return delayResponse(async () =>
  {
    const response = await fetch(usersWebServicesBaseUrl);
    if (response.ok === false)
    {
      await throwResponseError();
    }
    return response.json();
  });
}

export async function addUser({firstName, lastName, email})
{
  console.info(`Adding a user`);
  return delayResponse(async () =>
  {
    const response = await fetch(`${usersWebServicesBaseUrl}`,
      {
        method: "POST",
        headers: postPutHeaders,
        body: computePostPutBody(firstName, lastName, email)
      });
    if (response.ok === false)
    {
      await throwResponseError(response);
    }
  });
}

export async function updateUser({id, firstName, lastName, email})
{
  console.info(`Updating the user with id '${id}'`);
  return delayResponse(async () =>
  {
    const response = await fetch(`${usersWebServicesBaseUrl}/${id}`,
      {
        method: "PUT",
        headers: postPutHeaders,
        body: computePostPutBody(firstName, lastName, email)
      });
    if (response.ok === false)
    {
      await throwResponseError();
    }
  });
}

export async function deleteUser(id)
{
  console.info(`Deleting the user with id '${id}'`);
  return delayResponse(async () =>
  {
    const response = await fetch(`${usersWebServicesBaseUrl}/${id}`, {method: "DELETE"});
    if (response.ok === false)
    {
      await throwResponseError();
    }
  });
}
