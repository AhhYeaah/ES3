class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {}

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new DatabaseConnection();
    }

    return this.instance;
  }

  connect() {
    console.log("Connected");
  }
}

const databaseConnection = DatabaseConnection.getInstance();
databaseConnection.connect();
