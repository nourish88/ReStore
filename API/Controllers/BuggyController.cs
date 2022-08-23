using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SQLitePCL;

namespace API.Controllers;


public class BuggyController : BaseApiController
{
    private readonly ILogger<BuggyController> _logger;

    public BuggyController(ILogger<BuggyController> logger)
    {
        _logger = logger;
    }
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return GetNotFound();
    }

    [HttpGet("bad-request")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ProblemDetails { Title = "This is a bad request" });
    }
    [HttpGet("unauthorized")]
    [HttpGet]
    public ActionResult GetUnAuthorized()
    {
        return Unauthorized("This is a bad request");
    }
    [HttpGet("validation-error")]
    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("Problem1", "1st error");
        return ValidationProblem();
    }
    [HttpGet("server-error")]
    public ActionResult GetServerError()
    {
        throw new Exception("This is a server error");

    }
}
