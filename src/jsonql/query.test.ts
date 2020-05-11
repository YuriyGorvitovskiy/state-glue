import * as SUBJ from './query';

interface IResult {
    name: string;
    child: {
        name: string;
        cost: number;
    }
};


test("injectDefaults", () => {
    // Setup
    const example: SUBJ.IQuery<IResult> = {
        $type: 'Class1',
        name: {},
        child: {
            $type: 'Class2',
            $aggregate: true,
            name: ['hello', 'world'],
            cost: {
                $aggr: 'max'
            },
        }
    }

    // Execute
    const result = SUBJ.injectDefaults(example);

    // Verify
    expect(result).toEqual({
        $type: 'Class1',
        $aggregate: false,
        $page: 'all',
        name: {
            $field: 'name',
            $cmp: 'any',
            $value: undefined,
            $return: true,
            $sort: 'none',
            $aggr: 'group by'
        },
        child: {
            $type: 'Class2',
            $page: 'all',
            $aggregate: true,
            $dir: 'forward',
            $field: 'child',
            $cmp: 'any',
            $return: true,
            name: {
                $field: 'name',
                $cmp: 'in',
                $value: ['hello', 'world'],
                $return: true,
                $sort: 'none',
                $aggr: 'group by',
            },
            cost: {
                $field: 'cost',
                $cmp: 'any',
                $value: undefined,
                $return: true,
                $sort: 'none',
                $aggr: 'max',
            },
        }
    });
});