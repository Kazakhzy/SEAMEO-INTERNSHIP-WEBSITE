<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Accepted Registrant</title>
    <style>
        * {
            text-align: center !important;
            font-family: Arial, Helvetica, sans-serif !important;
        }

        table {
            width: 100vw;
            border-collapse: collapse;
            overflow: hidden;
            text-align: center;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
            padding: 15px;
            background-color: rgba(255, 255, 255, 0.2);
            color: black;
        }

        th {
            text-align: center;
        }

        thead {
            th {
                background-color: #85BBB5;
            }
        }

        a {
            color: #5d6975;
            text-decoration: underline;
        }

        body {
            position: relative;
            width: 100vw;
            max-width: 1024px;
        }

        header {
            padding: 10px 0;
            margin-bottom: 30px;
        }

        #logo {
            text-align: center;
            margin-bottom: 10px;
        }

        #logo img {
            width: 90px;
        }

        h1 {
            color: #5d6975;
            font-size: 2.4em;
            line-height: 1.4em;
            font-weight: normal;
            text-align: center;
            margin: 0 0 20px 0;
            background: url(dimension.png);
        }



        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
        }

        table tr:nth-child(2n-1) td {
            background: #f5f5f5;
        }

        table th,
        table td {
            text-align: center;
        }

        table th {
            padding: 10px;
            color: black;
            font-weight: 900;
            border-bottom: 1px solid #c1ced9;
            white-space: nowrap;
            font-weight: normal;
        }



        table td {
            padding: 5px;
            text-align: left;
        }


        footer {
            color: #5d6975;

            bottom: 0;
            border-top: 1px solid #c1ced9;
            padding: 8px 0;
            text-align: center;
        }
    </style>
</head>

<body>
    <header class="clearfix" style="clear: both;">
        <h2>Accepted Registrant</h2>
    </header>
    <main>
        <table class="center">
            <thead>
                <tr>
                    <th class="service"><b>No</b></th>
                    <th class="desc"><b>Name</b></th>
                    <th class="desc"><b>School / University Name</b></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($accepted as $data)
                    <tr>
                        <td>{{ $loop->iteration }} </td>
                        <td>{{ $data->name }}</td>
                        <td>{{ $data->school_university }}</td>
                    </tr>
                @endforeach

            </tbody>
        </table>
        <footer>
            NB: All data on this document is true & cannot change later.
        </footer>
    </main>

</body>

</html>
