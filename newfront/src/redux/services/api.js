import axios from "axios";

export const token = localStorage.getItem("token");
export const role = localStorage.getItem("role");

export const delay = async (ms) =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const fetchAuthLogin = (req) =>
   axios
    .post("/auth/login", req)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fetchAuthMe = async (tokens) =>
  await axios
    .get("/auth/me", {
      headers: {
        Authorization: tokens,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fetchAuthSetting = async (req) =>
  await axios
    .put("/api/user/update", req, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const fetchGetProducts = async () =>
  await axios
    .get("/api/product/", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

    export const fetchGetCheckLogin = async (login) =>
  await axios
    .get("/auth/check_login?login="+login, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

    // teachers

export const fetchGetTeachersList = async (req) =>
  await axios
    .get("/static/get_teachers_list?page="+Number(req.current)+"&limit="+Number(req.pageSize), {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));


export const fetchGetTeachersListSearch = async (req) =>
  await axios
    .get("/static/get_teachers_list_search?name="+req,{
      headers: {
        Authorization: token,
      },
    })


export const fetchDeleteTeacher = async (id) =>
  await axios
    .delete("/a23d_m23_i23n/delete_teacher?id="+Number(id), {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

  export const fetchGetSingleTeacher = async (id) =>
  await axios
    .get("/static/get_single_teacher?id="+id, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

    
export const fetchPostTeacher = async (req) =>
await axios
  .post(
    "/a23d_m23_i23n/add_teacher",
    req, 
    {
    headers: {
      Authorization: token
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchPutTeacher = async (req) =>
await axios
  .put(
    "/a23d_m23_i23n/put_teacher",
    req, 
    {
    headers: {
      Authorization: token
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

    //  language
export const fetchGetLanguagesList = async () =>
await axios
  .get(
    "/static/get_language",
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  // subject
     
export const fetchGetSubjectsList = async () =>
await axios
  .get(
    "/static/get_subjects",
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  export const fetchGetSingleSubjectsList = async (id) =>
  await axios
    .get(
      "/static/get_subject_one?id="+id,
      {
      headers: {
        Authorization: token,
      },
      })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

  export const fetchPostSubject = async (req) =>
  await axios
  .post(
    "/a23d_m23_i23n/add_subject",
    req,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  export const fetchPutSubject = async (req) =>
  await axios
  .put(
    "/a23d_m23_i23n/put_subject",
    req,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
  export const fetchDeleteSubject = async (id) =>
  await axios
  .delete(
    "/a23d_m23_i23n/delete_subject?id="+id,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));


// groups

export const fetchGetGroupsList = async (req) =>
  await axios
    .get("/static/get_group_list?current="+Number(req.current)+"&pageSize="+Number(req.pageSize), {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

    export const fetchGetGroupsTeacherList = async (req) =>
  await axios
    .get("/teacher/groups",{
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

    
export const fetchGetGroupsListSearch = async (name) =>
await axios
  .get("/depend/get_group_list_search?name="+name, {
    headers: {
      Authorization: token,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

    
  export const fetchGetSingleGroups = async (id) =>
  await axios
    .get(
      "/static/get_group_one?id="+id,
      {
      headers: {
        Authorization: token,
      },
      })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

  export const fetchPostGroup = async (req) =>
  await axios
  .post(
    "/a23d_m23_i23n/add_group",
    req,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  export const fetchPutGroup = async (req) =>
  await axios
  .put(
    "/a23d_m23_i23n/put_group",
    req,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
  export const fetchDeleteGroup = async (id) =>
  await axios
  .delete(
    "/a23d_m23_i23n/delete_group?id="+id,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));


  // Students

  
export const fetchGetStudentList = async (req) =>
await axios
  .get("/depend/get_students?current="+Number(req.current)+"&pageSize="+Number(req.pageSize), {
    headers: {
      Authorization: token,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchGetStudentGroupList = async (id) =>
await axios
  .get("/depend/get_student_list_by_group?id="+id, {
    headers: {
      Authorization: token,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchGetNewStudentList = async (req) =>
await axios
  .get("/static/get_students_new?current="+Number(req.current)+"&pageSize="+Number(req.pageSize), {
    headers: {
      Authorization: token,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchGetNewStudentOne = async (name) =>
await axios
  .get("/depend/get_Students_list_search?name="+name,{
    headers: {
      Authorization: token,
    },
  })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchGetSingleStudent = async (id) =>
await axios
  .get(
    "/static/get_student?id="+id,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

  
export const fetchGetSingleStudentGroups = async (id) =>
await axios
  .get(
    "/depend/get_group_list_student?id="+id,
    {
    headers: {
      Authorization: token,
    },
    })
  .then((response) => ({ response }))
  .catch((error) => ({ error }));

export const fetchPostStudent = async (req) =>
await axios
.post(
  "/depend/add_student",
  req,
  {
  headers: {
    Authorization: token,
  },
  })
.then((response) => ({ response }))
.catch((error) => ({ error }));


export const fetchPostStudentGroup = async (req) =>
await axios
.post(
  "/depend/student_group",
  req,
  {
  headers: {
    Authorization: token,
  },
  })
.then((response) => ({ response }))
.catch((error) => ({ error }));


export const fetchPostStudentLogin = async (req) =>
await axios
.post(
  "/depend/add_student_login",
  req,
  {
  headers: {
    Authorization: token,
  },
  })
.then((response) => ({ response }))
.catch((error) => ({ error }));

export const fetchPutStudent = async (req) =>
await axios
.put(
  "/auth/add_student",
  req,
  {
  headers: {
    Authorization: token,
  },
  })
.then((response) => ({ response }))
.catch((error) => ({ error }));


export const fetchDeleteStudent = async (id) =>
await axios
.delete(
  "/depend/delete_new_student?id="+id,
  {
  headers: {
    Authorization: token,
  },
  })
.then((response) => ({ response }))
.catch((error) => ({ error }));
