import React from 'react'
import './RecentTweets.css'

function RecentTweets({ rows }) {
    console.log(rows)
    return (
        <div>
            <table class="table table-bordered" id="Table">
                <tr>
                    <th>UserName</th>
                    <th>Tweet</th>
                </tr>
                {
                    rows != null ?
                        rows.slice(0, 10).map(row => {
                            return (
                                <tr>
                                    <td>
                                        {row.username}
                                    </td>
                                    <td>{row.tweet}</td>
                                </tr>
                            )
                        }) : <td></td>
                }

            </table>
        </div>
    )
}

export default RecentTweets
