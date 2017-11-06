export default {
  label: 'root',
  children: [
    {
      label: 'child 1',
      children: [
        {
          label: 'child 1-1',
          size: 10
        },
        {
          label: 'child 1-2',
          children: [
            {
              label: 'child 1-2-1',
              size: 5
            },
            {
              label: 'child 1-3-1',
              size: 8
            }
          ]
        },
        {
          label: 'child 1-3',
          children: [
            {
              label: 'child 1-3-1',
              children: [
                {
                  label: 'child 1-3-1-1',
                  size: 2
                },
                {
                  label: 'child 1-3-1-2',
                  size: 5
                }
              ]
            },
            {
              label: 'child 1-3-2',
              size: 8
            }
          ]
        }
      ]
    },
    {
      label: 'child 2',
      size: 25
    }
  ]
}
