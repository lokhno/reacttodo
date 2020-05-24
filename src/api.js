import { db, auth } from "./firebase";

export function loginUser(login, password) {
    auth.signInWithEmailAndPassword(login, password).then(()=>{
       console.log('USER LOGGED IN')
          
    }).catch((error) => {
        console.log(error);
    });
}

export function getLists() {
    return db
        .collection("lists")
        .get()
        .then((snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            return items;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

export function getTodos() {
    return db
        .collection("todos")
        .where("listId", "==", "")
        .get()
        .then((snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            console.log(items);
            return items;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

export function getListTodos(listId) {
    return db
        .collection("todos")
        .where("listId", "==", listId)
        .get()
        .then((snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            console.log(items);
            return items;
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

export function createTodo(data) {
    return db
        .collection("todos")
        .add({
            ...data,
            completed: false,
        })
        .then((docRef) => {
            return docRef.get();
        })
        .then((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
}

export function deleteTodo(todoId) {
    return db
        .collection("todos")
        .doc(todoId)
        .delete()
        .then(() => todoId);
}

export function updateTodo(todoId, data) {
    return db
        .collection("todos")
        .doc(todoId)
        .update(data)
        .then(() => ({
            id: todoId,
            ...data,
        }));
}

export function onAuth(handleAuth) {
    auth.onAuthStateChanged(handleAuth);
}

