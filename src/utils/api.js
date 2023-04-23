// Api - fetch

const GET = async (limit) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=30`
    );
    if (!response.ok) {
      throw new Error("There was an error on response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    // loader.textContent = 'There was an error trying to load the content.';
  }
};

export const PUT = async (schema, path, method, id = "") => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/" + path + "/" + id,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(schema),
      }
    );

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log("REPONSE POST: ", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (schema, path, method) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/" + path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(schema),
    });

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log("REPONSE POST: ", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const DELETE = async (path, method, id = "") => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/" + path + "/" + id,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log("REPONSE POST: ", data);
  } catch (error) {
    console.log(error.message);
  }
};

export default GET;
