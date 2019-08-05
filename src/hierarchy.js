export default {
    jobName: "Load File Data",
    order: 0,
    parentId: 001,
    jobId: 001,
    jobDescription:
        "Retrieve a file and load int into a database on a daily frequency",
    status: "in progress",
    dependencies: [
        {
            jobName: "Read File Data",
            order: 0,
            jobId: 012,
            parentId: 001,
            jobDescription:
                "Reads csv file from the file system if it exists and loads it into a staging table",
            status: "complete",
            dependencies: []
        },
        {
            jobName: "Validate Staging Table",
            order: 1,
            jobId: 013,
            parentId: 001,
            jobDescription:
                "Ensures there are no null values and that all data types in the Staging Table are correct",
            status: "in progress",
            dependencies: []
        },
        {
            jobName: "Transform Staging Data",
            order: 2,
            jobId: 014,
            parentId: 001,
            jobDescription:
                "Normalizes Some Data from Staging Table to ensure all numeric values are padded with 2 zeroes and all Strings are trimmed",
            status: "waiting",
            dependencies: [
                {
                    jobName: "Create Additional Columns",
                    order: 0,
                    jobId: 015,
                    parentId: 014,
                    jobDescription:
                        "Create Additional Columns on staging table to retain data lineage and utilize non destructive transformations",
                    status: "waiting"
                }
            ]
        },
        {
            jobName: "Create Final Table",
            order: 3,
            jobId: 016,
            parentId: 001,
            jobDescription: "Creates Final Table where all data will be loaded",
            status: "complete",
            dependencies: []
        },
        {
            jobName: "Load Final Table",
            order: 3,
            jobId: 016,
            parentId: 001,
            jobDescription:
                "Loads Data from Staging Table with Transformations and Validations into Staging Table",
            status: "waiting",
            dependencies: []
        }
    ]
};
