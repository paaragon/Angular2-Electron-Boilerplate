export class Example {

    constructor(
        public prop1: string,
        public prop2: number,
        public prop3: string
    ) { }

    static fromJson(json: any): Example {
        return new Example(
            json.prop3,
            json.prop2,
            json.prop1
        );
    }

    static fromJsonToList(json: any): Example[] {
        return (json as any[]).reduce((examples: Example[], example: any) => {
            examples.push(Example.fromJson(example));
            return examples;
        }, []);
    }
}